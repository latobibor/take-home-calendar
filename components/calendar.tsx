import { View, StyleSheet } from 'react-native';
import { MonthAndYear } from './month-and-year';
import { useState } from 'react';
import { TimeControls } from './time-controls';

export function Calendar() {
  const [year, setYear] = useState((new Date()).getFullYear());
  const [month, setMonth] = useState((new Date()).getMonth());

  return <View style={styles.container}>
    <MonthAndYear month={month} year={year}/>
    <TimeControls month={month} year={year} setYear={setYear} setMonth={setMonth}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 8,

    borderCurve: 'circular',
    borderRadius: 10,
    borderColor: '#3e3e3e',
    borderWidth: 2,

    backgroundColor: '#131313'
  },
});
