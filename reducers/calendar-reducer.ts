import { createContext, Dispatch } from 'react';

export const CalendarContext = createContext<CalendarState>({ selectedDate: new Date() });
export const CalendarDispatchContext = createContext<Dispatch<CalendarActions>>(null);

type CalendarState = {
  selectedDate: Date;
};

type CalendarActions = {
  type: 'date_selected';
  value: Date;
};

export function calendarReducer(calendarState: CalendarState, action: CalendarActions): CalendarState {
  switch (action.type) {
    case 'date_selected':
      return {
        ...calendarState,
        selectedDate: action.value
      };
  }
}

