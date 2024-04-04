import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TimeControls } from './time-controls';
import { CurrentMonthAndYearLabel } from './current-month-and-year-label';

interface HeaderProps {
  year: number;
  month: number;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export function Header({ selectedDate, setSelectedDate, year, month }: HeaderProps) {
  return <View style={styles.headerContainer}>
    <CurrentMonthAndYearLabel month={month} year={year}/>
    <TimeControls selectedDate={selectedDate} onMonthChange={setSelectedDate}></TimeControls>
  </View>;
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 4
  },
});
