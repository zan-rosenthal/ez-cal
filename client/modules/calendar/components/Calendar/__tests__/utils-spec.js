import { combineAppointments, canAddAppointment } from "../utils";
import { convertToDateRange, mockAppointments } from "../../../utils";
import { moment, today } from "../../../utils/moment";

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

  describe("canAddAppointment", () => {
    const scheduledAppointments = [
      {
        range: moment.range(
          today.clone().startOf("day"),
          today.clone().endOf("day")
        )
      },
      {
        range: moment.range(
          today.clone().add(1, "day").startOf("day"),
          today.clone().add(1, "day").endOf("day")
        )
      }
    ];
    test("it returns false if any of the scheduledAppointments contain the selected date", () => {
      expect(
        canAddAppointment(today.clone().add(1, "day"))(scheduledAppointments)
      ).toBe(false);
    });
    test("it returns true if none of the scheduledAppointments contain the selected date", () => {
      expect(
        canAddAppointment(today.clone().add(5, "day"))(scheduledAppointments)
      ).toBe(true);
    });
  });
});
