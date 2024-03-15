import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Day, getDaysForPage, JumpOperation } from '../date-functions/date-functions';
import { useState } from 'react';

// Probably there is a smarter way for doing this, but under time crunch this is what I came up with.
const poorMansPagination: Pagination[] = [
  {start: 0, end: 7},
  {start: 7, end: 14},
  {start: 14, end: 21},
  {start: 21, end: 28},
  {start: 28, end: 35},
  {start: 35, end: 42},
]

type Pagination = {
  start: number;
  end: number;
}

interface DaysProps {
  year: number;
  month: number;
  onDaySelection: (day: Day) => void;
}

export function Days({year, month, onDaySelection}: DaysProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfPage = getDaysForPage({year, month});

  function onCombinedDaySelection(day: Day) {
    onDaySelection(day);
    setSelectedDate(day.actualDate);
  }

  return <View style={styles.monthContainer}>
    {
      poorMansPagination.map(({start, end}) =>
        (<Week
          key={`${start}_${end}`}
          days={daysOfPage.slice(start,end)}
          selectedDate={selectedDate}
          onDaySelection={onCombinedDaySelection} />))
    }
  </View>
}

interface WeekProps {
  days: Day[];
  selectedDate: Date;
  onDaySelection: (day: Day) => void;
}

function Week({days, selectedDate, onDaySelection}: WeekProps) {
  function getStylesForDay(actualDay: Day) {
    return (actualDay.operation === JumpOperation.Backward || actualDay.operation === JumpOperation.Forward) ?
      [styles.defaultNumber, styles.darkNumber] : styles.defaultNumber;
  }

  function getStyleForDayContainer(actualDay: Day) {
    const isSelected = actualDay.day === selectedDate.getDate() && actualDay.actualDate.getMonth() === selectedDate.getMonth();

    return isSelected ? [styles.dayContainer, styles.selectedDay] : styles.dayContainer;
  }

  return <View style={styles.weekContainer}>
    {days.map(day => (
      <Pressable key={day.day + day.operation} onPress={() => onDaySelection(day)}>
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
    // for some odd reason border radius is glitching and sometimes becomes a square
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
  }
});
