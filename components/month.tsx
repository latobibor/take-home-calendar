import { StyleSheet, View } from 'react-native';
import { getDaysForPage } from '../date-functions/date-functions';
import { Week } from './week';

const VISIBLE_WEEKS = [0, 1, 2, 3, 4, 5, 6];

interface MonthProps {
  selectedDate: Date;
  onDaySelection: (date: Date) => void;
}

export function Month({ selectedDate, onDaySelection }: MonthProps) {
  const daysOfPage = getDaysForPage({ year: selectedDate.getFullYear(), month: selectedDate.getMonth() });

  return <View style={styles.container}>
    {
      VISIBLE_WEEKS
        .map(index => ({ startIndex: index * 7, endIndex: index * 7 + 7 }))
        .map(({ startIndex, endIndex }) =>
          (
            <Week
              key={`${startIndex}_${endIndex}`}
              days={daysOfPage.slice(startIndex, endIndex)}
              selectedDate={selectedDate}
              onDaySelection={onDaySelection}/>
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
