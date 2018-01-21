import { head, tail } from "ramda";
import { saveAppointment } from "../scheduledAppointments";
import { mockAppointments } from "../../utils/mockAppointments";

describe("modules/Calendar/reducers", () => {
  describe("scheduledAppointments reducer", () => {
    describe("saveAppointments", () => {
      const scheduledAppointments = tail(mockAppointments);
      const pendingAppointment = head(mockAppointments);

      test("it appends the new appointment", () => {
        expect(
          saveAppointment(scheduledAppointments, {
            payload: pendingAppointment
          })
        ).toEqual(mockAppointments);
      });
    });
  });
});
