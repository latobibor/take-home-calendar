import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TimeControls } from './time-controls';
import { CurrentMonthAndYearLabel } from './current-month-and-year-label';

export function Header() {
  return <View style={styles.headerContainer}>
    <CurrentMonthAndYearLabel />
    <TimeControls />
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
