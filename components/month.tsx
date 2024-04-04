import { StyleSheet, View } from 'react-native';
import { getWeeksOfPage } from '../date-functions/date-functions';
import { DayOfMonth } from './day-of-month';
import { Week } from './week';

interface MonthProps {
  selectedDate: Date;
  onDaySelection: (date: Date) => void;
}

export function Month({ selectedDate, onDaySelection }: MonthProps) {
  const weeksOfPage = getWeeksOfPage({ year: selectedDate.getFullYear(), month: selectedDate.getMonth() });

  return <View style={styles.container}>
    {weeksOfPage.map((week, weekIndex) =>
      <Week key={`${week}_${weekIndex}`}>
        {week.map((day, dayIndex) => (
          <DayOfMonth
            key={`${day.day}_${dayIndex}`}
            day={day}
            selectedDate={selectedDate}
            onDaySelection={onDaySelection}
          />))
        }
      </Week>)}
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  }
});
