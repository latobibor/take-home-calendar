import { Day } from '../../date-functions/date-functions';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useContext } from 'react';
import { CalendarContext, CalendarDispatchContext } from '../../reducers/calendar-reducer';

interface DayOfMonthProps {
  day: Day;
}

export function DayOfMonth({ day }: DayOfMonthProps) {
  const { selectedDate } = useContext(CalendarContext);
  const dispatch = useContext(CalendarDispatchContext);

  function getStylesForDay(actualDay: Day) {
    return actualDay.isOutOfMonthDay ?
      [styles.defaultNumber, styles.darkNumber] : styles.defaultNumber;
  }

  function getStyleForDayContainer(actualDay: Day) {
    const isSelected = actualDay.day === selectedDate.getDate() && actualDay.actualDate.getMonth() === selectedDate.getMonth();

    return isSelected ? [styles.selectedDay, styles.dayContainer] : styles.dayContainer;
  }

  function onDaySelection(date: Date) {
    dispatch({
      type: 'date_selected',
      value: date,
    });
  }

  return <Pressable style={getStyleForDayContainer(day)} key={day.actualDate.getDate()}
                    onPress={() => onDaySelection(day.actualDate)}>
    <Text
      style={getStylesForDay(day)}
    >{day.day}
    </Text>
  </Pressable>;
}

const styles = StyleSheet.create({
  dayContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 40,
    width: 40,
    height: 40,
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
    borderRadius: 20,
  }
});
