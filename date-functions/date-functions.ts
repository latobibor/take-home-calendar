export enum JumpOperation {
  Stay,
  Backward,
  Forward,
}

export type Day = {
  operation: JumpOperation;
  day: number;
  actualDate: Date;
}

const TOTAL_NUMBER_OF_DAYS_PER_PAGE = 6 * 7;

// defining it as an object with named properties it is harder to pass year for month and vice versa
interface GetDaysForPageParams {
  year: number;
  month: number;
}

export function getDaysForPage({ year, month }: GetDaysForPageParams): Day[] {
  const offset = getOffsetOfFirstDay(year, month);

  const arrayOfCurrentMonth = numberOfDaysToDayArray(getDaysInMonth(year, month)).map(day => ({
    operation: JumpOperation.Stay,
    day,
    actualDate: new Date(year, month, day)
  }));

  const arrayOfPreviousMonth = numberOfDaysToDayArray(getDaysInMonth(year, month - 1)).slice(-offset).map(day => ({
    operation: JumpOperation.Backward,
    day,
    actualDate: new Date(year, month - 1, day)
  }));

  const arrayOfNextMonth = numberOfDaysToDayArray(getDaysInMonth(year, month + 1)).map(day => ({
    operation: JumpOperation.Forward,
    day,
    actualDate: new Date(year, month + 1, day)
  }));

  return [...arrayOfPreviousMonth, ...arrayOfCurrentMonth, ...arrayOfNextMonth].slice(0, TOTAL_NUMBER_OF_DAYS_PER_PAGE);
}

function getOffsetOfFirstDay(year: number, month: number) {
  const firstDay = new Date(year, month, 1);

  return firstDay.getDay();
}

function numberOfDaysToDayArray(numberOfDays: number) {
  return Array.from({length: numberOfDays}, (_, i) => i + 1)
}

// modified stack overflow answer
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
