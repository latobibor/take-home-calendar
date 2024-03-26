import { View, StyleSheet } from 'react-native';
import { CurrentMonthAndYearLabel } from './current-month-and-year-label';
import { useState } from 'react';
import { TimeControls } from './time-controls';
import { Month } from './month';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  return <View style={styles.container}>
    <View style={styles.headerContainer}>
      <CurrentMonthAndYearLabel month={month} year={year}/>
      <TimeControls selectedDate={selectedDate} onMonthChange={setSelectedDate}/>
    </View>
    <Month selectedDate={selectedDate} onDaySelection={setSelectedDate} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,

    width: '100%',

    borderCurve: 'circular',
    borderRadius: 10,
    borderColor: '#3e3e3e',
    borderWidth: 2,

    backgroundColor: '#131313',

    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 4
  },
});
