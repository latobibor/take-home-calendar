import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from './components/calendar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendar</Text>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    color: '#FFF',
  }
});
