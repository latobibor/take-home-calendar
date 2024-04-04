export type Day = {
  isOutOfMonthDay: boolean;
  day: number;
  actualDate: Date;
}

const DAYS_IN_A_WEEK = 7;
const TOTAL_WEEKS_PER_PAGE = 6;
const TOTAL_NUMBER_OF_DAYS_PER_PAGE = TOTAL_WEEKS_PER_PAGE * DAYS_IN_A_WEEK;

// defining it as an object with named properties it is harder to pass year for month and vice versa
interface GetDaysForPageParams {
  year: number;
  month: number;
}

export function getWeeksOfPage({ year, month }: GetDaysForPageParams): Day[][] {
  const offset = getOffsetOfFirstDay(year, month);

  const arrayOfCurrentMonth = numberOfDaysToDayArray(getDaysInMonth(year, month)).map(day => ({
    isOutOfMonthDay: false,
    day,
    actualDate: new Date(year, month, day)
  }));

  const arrayOfPreviousMonth = numberOfDaysToDayArray(getDaysInMonth(year, month - 1)).slice(-offset).map(day => ({
    isOutOfMonthDay: true,
    day,
    actualDate: new Date(year, month - 1, day)
  }));

  const arrayOfNextMonth = numberOfDaysToDayArray(getDaysInMonth(year, month + 1)).map(day => ({
    isOutOfMonthDay: true,
    day,
    actualDate: new Date(year, month + 1, day)
  }));

  const allDaysForPage = [...arrayOfPreviousMonth, ...arrayOfCurrentMonth, ...arrayOfNextMonth].slice(0, TOTAL_NUMBER_OF_DAYS_PER_PAGE);

  const weeksForPage: Day[][] = [];

  for (let i = 0; i < TOTAL_WEEKS_PER_PAGE; i++) {
    weeksForPage.push(allDaysForPage.slice(i * DAYS_IN_A_WEEK, (i + 1) * DAYS_IN_A_WEEK));
  }

  return weeksForPage;
}

function getOffsetOfFirstDay(year: number, month: number) {
  const firstDay = new Date(year, month, 1);

  return firstDay.getDay();
}

function numberOfDaysToDayArray(numberOfDays: number) {
  return Array.from({ length: numberOfDays }, (_, i) => i + 1);
}

// modified stack overflow answer
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
