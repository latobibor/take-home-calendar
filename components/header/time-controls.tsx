import { Text, Pressable, StyleSheet, View } from 'react-native';

const TRANSPARENT_COLOR = '#00000000'

interface TimeControlsProps {
  selectedDate: Date;
  onMonthChange: (selectedDate: Date) => void;
}

export function TimeControls({ selectedDate, onMonthChange }: TimeControlsProps) {
  const clonedMonth = new Date(selectedDate);

  function decrementMonth() {
    clonedMonth.setMonth(selectedDate.getMonth() - 1);
    onMonthChange(clonedMonth);
  }

  function incrementMonth() {
    clonedMonth.setMonth(selectedDate.getMonth() + 1);
    onMonthChange(clonedMonth);
  }

  return <View style={styles.container}>
    <Pressable onPress={decrementMonth}><Text style={styles.buttonStyle}>&lt;</Text></Pressable>
    <Pressable onPress={incrementMonth}><Text style={styles.buttonStyle}>&gt;</Text></Pressable>
  </View>
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginRight: 10
  },
  buttonStyle: {
    backgroundColor: TRANSPARENT_COLOR,
    color: 'white',
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 20
  }
});

