import { StyleSheet, View } from 'react-native';
import { Day, getDaysForPage } from '../date-functions/date-functions';
import { Fragment, useState } from 'react';
import { Week } from './week';

// Probably there is a smarter way for doing this, but under time crunch this is what I came up with.
const poorMansPagination: Pagination[] = [
  {start: 0, end: 7},
  {start: 7, end: 14},
  {start: 14, end: 21},
  {start: 21, end: 28},
  {start: 28, end: 35},
  {start: 35, end: 42},
]

type Pagination = {
  start: number;
  end: number;
}

interface DaysProps {
  year: number;
  month: number;
  onDaySelection: (day: Day) => void;
}

export function Month({year, month, onDaySelection}: DaysProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfPage = getDaysForPage({year, month});

  function onCombinedDaySelection(day: Day) {
    onDaySelection(day);
    setSelectedDate(day.actualDate);
  }

  return <View style={styles.container}>
    {
      poorMansPagination.map(({start, end}) =>
        (
          <Week
            key={`${start}_${end}`}
            days={daysOfPage.slice(start, end)}
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
