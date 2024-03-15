import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Day, getDaysForPage, JumpOperation } from '../date-functions/date-functions';
import { useState } from 'react';


interface DaysProps {
  year: number;
  month: number;
}

export function Days({year, month}: DaysProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfPage = getDaysForPage({year, month});

  // This is not the most elegant, but I wanted to save time
  const week1 = daysOfPage.slice(0, 7);
  const week2 = daysOfPage.slice(7, 14);
  const week3 = daysOfPage.slice(14, 21);
  const week4 = daysOfPage.slice(21, 28);
  const week5 = daysOfPage.slice(28, 35);
  const week6 = daysOfPage.slice(35, 42);

  return <View style={styles.monthContainer}>
    <Week days={week1} selectedDate={selectedDate}/>
    <Week days={week2} selectedDate={selectedDate}/>
    <Week days={week3} selectedDate={selectedDate}/>
    <Week days={week4} selectedDate={selectedDate}/>
    <Week days={week5} selectedDate={selectedDate}/>
    <Week days={week6} selectedDate={selectedDate}/>
  </View>
}

interface WeekProps {
  days: Day[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  currentYear: number;
  currentMonth: number;
}

function Week({days, currentMonth, currentYear, selectedDate, setSelectedDate}: WeekProps) {
  function onPress(selectedDay: number, selectedOperation: JumpOperation) {
    console.log(`days > Week > currentDay`, selectedDate.getDate(), selectedOperation);
  }

  function getStylesForDay(actualDay: Day) {
    return (actualDay.operation === JumpOperation.Backward || actualDay.operation === JumpOperation.Forward) ?
      [styles.defaultNumber, styles.darkNumber] : styles.defaultNumber;
  }

  function getStyleForDayContainer(actualDay: Day) {
    const isSelected = actualDay.day === selectedDate.getDate() && actualDay.month === selectedDate.getMonth();

    return isSelected ? [styles.dayContainer, styles.selectedDay] : styles.dayContainer;
  }

  return <View style={styles.weekContainer}>
    {days.map(day => (
      <Pressable key={day.day + day.operation} onPress={() => onPress(day.day, day.operation)}>
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
  monthContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  weekContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultNumber: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  darkNumber: {
    color: '#414141'
  },
  selectedDay: {
    backgroundColor: '#41918f',
  }
});


// - get position of the day during the week
// - get number of days in month
// - get offset for days
// - highlight selected day as a circle
// - change month/year when out of bounds day is called
// - reload the page on that (maybe install overmindjs?)

