import {View, Text, StyleSheet} from 'react-native';

// We do not need to recreate the formatter on every render, therefore this function can be separately defined and used.
// Note that months are 0-based!
const {format: dateToMonth} = new Intl.DateTimeFormat('en', {month: 'long'});

interface MonthAndYearProps {
  month: number;
  year: number;
}

export function MonthAndYear({month, year}: MonthAndYearProps) {
  return <View style={styles.container}>
    <Text style={styles.month}>{dateToMonth(new Date(year, month))}</Text>
    <Text style={styles.year}>{year}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  month: {
    fontSize: 15,
    color: '#FFF'
  },
  year: {
    fontSize: 25,
    color: '#FFF'
  }
});
