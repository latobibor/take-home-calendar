import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Month } from './month';
import { Header } from '../header/header';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();

  return <View style={styles.container}>
    <Header year={year} month={month} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <Month selectedDate={selectedDate} onDaySelection={setSelectedDate}/>
  </View>;
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
});
