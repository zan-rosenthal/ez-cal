import { today, moment } from "../moment";
import convertToDateRange from "../convertToDateRange";

describe("calendar/utils", () => {
  describe("convertToDateRange", () => {
    test("it turns a date into a date range of one day", () => {
      const { start, end } = convertToDateRange(today.toISOString());
      const diff = 1 - moment.duration(end.diff(start)).asDays();
      expect(start._isAMomentObject).toBe(true);
      expect(end._isAMomentObject).toBe(true);
      expect(diff).toBeLessThan(0.01);
    });
  });
});
