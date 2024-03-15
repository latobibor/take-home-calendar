import { View, Text } from "react-native";

// we do not need to recreate it on every day, so I pulled this up to be outside the component
// months are 0-based
const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' }); 


export function MonthAndYear({ month, year }) {
  return <View>
    <Text>{monthFormatter(new Date(year, month))}</Text>
    <Text>{year}</Text>
  </View>
}

const styles = StyleSheet.create({
  month: {
    fontSize: 12,
    color: '#000'
  },
  year: {
    fontSize: 16,
    color: '#000'
  }
});
