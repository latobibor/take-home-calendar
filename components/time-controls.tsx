import { Text, Pressable, StyleSheet, View } from 'react-native';

const JANUARY = 0;
const DECEMBER = 11;
const NUMBER_OF_MONTHS_IN_A_YEAR = 12;
const TRANSPARENT = '#00000000'

interface TimeControlsProps {
  year: number;
  month: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
}

export function TimeControls({year, month, setYear, setMonth}: TimeControlsProps) {
  function decrementMonth() {
    if (month === JANUARY) {
      setMonth(DECEMBER);
      setYear(year - 1);
      return;
    }

    setMonth(month - 1);
  }

  function incrementMonth() {
    setMonth((month + 1) % NUMBER_OF_MONTHS_IN_A_YEAR);

    if (month === DECEMBER) {
      setYear(year + 1);
    }
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
    backgroundColor: '#00000000',
    color: 'white',
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 20
  }
});

