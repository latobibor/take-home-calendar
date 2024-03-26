import { StyleSheet, View } from 'react-native';
import { Day, getDaysForPage } from '../date-functions/date-functions';
import { useState } from 'react';
import { Week } from './week';

const VISIBLE_WEEKS = [0, 1, 2, 3, 4, 5, 6];

interface MonthProps {
  year: number;
  month: number;
  onDaySelection: (day: Day) => void;
}

export function Month({year, month, onDaySelection}: MonthProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfPage = getDaysForPage({year, month});

  function onCombinedDaySelection(day: Day) {
    onDaySelection(day);
    setSelectedDate(day.actualDate);
  }

  return <View style={styles.container}>
    {
      VISIBLE_WEEKS
        .map(index => ({ startIndex: index * 7, endIndex: index * 7 + 7}))
        .map(({startIndex, endIndex}) =>
        (
          <Week
            key={`${startIndex}_${endIndex}`}
            days={daysOfPage.slice(startIndex, endIndex)}
            selectedDate={selectedDate}
            onDaySelection={onCombinedDaySelection}/>
        ))
    }
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 5
  }
});
