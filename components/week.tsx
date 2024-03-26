import { Day } from '../date-functions/date-functions';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface WeekProps {
  days: Day[];
  selectedDate: Date;
  onDaySelection: (date: Date) => void;
}

export function Week({ days, selectedDate, onDaySelection }: WeekProps) {
  function getStylesForDay(actualDay: Day) {
    return actualDay.isOutOfMonthDay ?
      [styles.defaultNumber, styles.darkNumber] : styles.defaultNumber;
  }

  function getStyleForDayContainer(actualDay: Day) {
    const isSelected = actualDay.day === selectedDate.getDate() && actualDay.actualDate.getMonth() === selectedDate.getMonth();

    return isSelected ? [styles.selectedDay, styles.dayContainer] : styles.dayContainer;
  }

  return <View style={styles.weekContainer}>
    {days.map(day => (
      <Pressable key={day.actualDate.getDate()} onPress={() => onDaySelection(day.actualDate)}>
        <View style={getStyleForDayContainer(day)}>
          <Text
            style={getStylesForDay(day)}
          >{day.day}
          </Text>
        </View>
      </Pressable>))}
  </View>
}

const styles = StyleSheet.create({
  weekContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    width: 30,
    height: 30,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultNumber: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },
  darkNumber: {
    color: '#414141'
  },
  selectedDay: {
    backgroundColor: '#41918f',
    borderRadius: 15,
  }
});
