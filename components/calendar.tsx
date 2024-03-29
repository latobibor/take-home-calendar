import { View, StyleSheet } from 'react-native';
import { MonthAndYear } from './month-and-year';
import { useState } from 'react';
import { TimeControls } from './time-controls';
import { Days } from './days';

export function Calendar() {
  const [year, setYear] = useState((new Date()).getFullYear());
  const [month, setMonth] = useState((new Date()).getMonth());

  return <View style={styles.container}>
    <View style={styles.headerContainer}>
      <MonthAndYear month={month} year={year}/>
      <TimeControls month={month} year={year} setYear={setYear} setMonth={setMonth}/>
    </View>
    <Days/>
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

    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
