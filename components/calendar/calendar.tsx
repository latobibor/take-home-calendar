import { View, StyleSheet } from 'react-native';
import { useReducer } from 'react';
import { Month } from './month';
import { Header } from '../header/header';
import { CalendarContext, CalendarDispatchContext, calendarReducer } from '../../reducers/calendar-reducer';

export function Calendar() {
  const [selectedDate, dispatch] = useReducer(calendarReducer, { selectedDate: new Date() });

  return <CalendarContext.Provider value={selectedDate}>
    <CalendarDispatchContext.Provider value={dispatch}>
      <View style={styles.container}>
        <Header/>
        <Month/>
      </View>
    </CalendarDispatchContext.Provider>
  </CalendarContext.Provider>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 10,

    borderCurve: 'circular',
    borderRadius: 10,
    borderColor: '#3e3e3e',
    borderWidth: 2,

    backgroundColor: '#131313',

    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
