import { StyleSheet, Text, View } from 'react-native';

export function Days() {
  return <View><Text style={styles.numberStyle}>1</Text></View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  numberStyle: {
    fontSize: 15,
    color: 'white',
  }
});

