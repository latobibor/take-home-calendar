import { getWeeksOfPage } from './date-functions';

// I specify locale to be the US to avoid unit test "glitches" coming from different languages of other devs
// I also prefer to use the new standard Intl library over, say, momentjs
const dayOfWeekFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });

describe('date-functions', () => {
  describe('getWeeksOfPage', () => {
    it('returns 6 weeks per months', () => {
      const weeks = getWeeksOfPage({ year: 2024, month: 4 });

      expect(weeks).toHaveLength(6);
    });

    it('returns each week with Saturday the last day and Sunday the first of the next', () => {
      const weeks = getWeeksOfPage({ year: 2024, month: 4 });

      const saturdayOfFirstWeek = weeks[0][6];
      const sundayOfSecondWeek = weeks[1][0];

      expect(dayOfWeekFormatter.format(saturdayOfFirstWeek.actualDate)).toEqual('Saturday');
      expect(dayOfWeekFormatter.format(sundayOfSecondWeek.actualDate)).toEqual('Sunday');
    });

    it('returns number of the calendar day along with if it is in or out of the current month', () => {
      const weeks = getWeeksOfPage({ year: 2024, month: 4 });

      const beforeCurrentMonthDay = weeks[0][0];
      const currentMonthDay = weeks[2][3];
      const afterCurrentMonthDay = weeks[5][6];

      expect(beforeCurrentMonthDay.day).toEqual(28);
      expect(beforeCurrentMonthDay.isOutOfMonthDay).toBeTruthy();

      expect(currentMonthDay.day).toEqual(15);
      expect(currentMonthDay.isOutOfMonthDay).toBeFalsy();

      expect(afterCurrentMonthDay.day).toEqual(8);
      expect(afterCurrentMonthDay.isOutOfMonthDay).toBeTruthy();
    });


    it('cannot have more than 6 "out of month" days in the first week', () => {
      const weeks = getWeeksOfPage({ year: 2024, month: 8 });

      const firstWeek = weeks[0];

      expect(firstWeek.filter(({isOutOfMonthDay}) => isOutOfMonthDay).length).toBeLessThan(7);
    });
  });
});
