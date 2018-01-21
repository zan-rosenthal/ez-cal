import { combineAppointments } from "../utils";
import { convertToDateRange, mockAppointments } from "../../../utils";
import { today } from "../../../utils/moment";

describe("Calendar/utils", () => {
  describe("combineAppointments", () => {
    const scheduledAppointments = mockAppointments;
    const pendingAppointment = {
      range: convertToDateRange(today.toISOString())
    };

    test("it converts scheduledAppointments and pendingAppointments to a Dayz events collection", () => {
      const props = {
        pendingAppointment,
        scheduledAppointments
      };

      expect(combineAppointments(props)).toEqual([
        ...scheduledAppointments,
        pendingAppointment
      ]);
    });
  });
});
