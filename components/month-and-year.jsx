import {View, Text, StyleSheet} from 'react-native';

// we do not need to recreate it on every day, so I pulled this up to be outside the component
// months are 0-based
const {format: dateToMonth} = new Intl.DateTimeFormat('en', {month: 'long'});

export function MonthAndYear({month, year}) {
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
