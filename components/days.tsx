import { StyleSheet, Text, View } from 'react-native';
import { Day, getDaysForPage, JumpOperation } from '../date-functions/date-functions';


interface DaysProps {
  year: number;
  month: number;
}

export function Days({year, month}: DaysProps) {
  const daysOfPage = getDaysForPage({year, month});

  // This is not the most elegant, but I wanted to save time
  const week1 = daysOfPage.slice(0, 7);
  const week2 = daysOfPage.slice(7, 14);
  const week3 = daysOfPage.slice(14, 21);
  const week4 = daysOfPage.slice(21, 28);
  const week5 = daysOfPage.slice(28, 35);
  const week6 = daysOfPage.slice(35, 42);

  return <View style={styles.monthContainer}>
    <Week days={week1}/>
    <Week days={week2}/>
    <Week days={week3}/>
    <Week days={week4}/>
    <Week days={week5}/>
    <Week days={week6}/>
  </View>
}

interface WeekProps {
  days: Day[];
}

function Week({days}: WeekProps) {
  return <View style={styles.weekContainer}>
    {days.map(day => (
      <Text key={day.day + day.operation}
            style={(day.operation === JumpOperation.Backward || day.operation === JumpOperation.Forward) ?
              [styles.numberStyle, styles.darkStyle] : styles.numberStyle
            }
      >{day.day}
      </Text>))}
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
  numberStyle: {
    fontSize: 15,
    color: 'white',
    width: 20,
  },
  darkStyle: {
    color: '#414141'
  }
});


// - get position of the day during the week
// - get number of days in month
// - get offset for days
// - highlight selected day as a circle
// - change month/year when out of bounds day is called
// - reload the page on that (maybe install overmindjs?)

