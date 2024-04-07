import { View, Text, StyleSheet } from 'react-native';

// To get the names of months I use the built-in Intl API. We do not need to recreate the formatter on
// every render, therefore the formatter function can be separately defined.
// Note that months are 0-based!
const { format: dateToMonth } = new Intl.DateTimeFormat('en', { month: 'long' });

interface MonthAndYearProps {
  month: number;
  year: number;
}

export function CurrentMonthAndYearLabel({ month, year }: MonthAndYearProps) {
  return <View style={styles.container}>
    <Text style={styles.month}>{dateToMonth(new Date(year, month))}</Text>
    <Text style={styles.year}>{year}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
  },
  month: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: '#FFF'
  },
  year: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: '#FFF'
  }
});
