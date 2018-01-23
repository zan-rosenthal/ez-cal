import { path } from "ramda";
import { globalizeSelectors } from "zeal-redux-utils";

const localState = path(["app", "calendar"]);

const appointmentError = path(["pendingAppointment", "error"]);
const pendingAppointment = path(["pendingAppointment"]);
const scheduledAppointments = path(["scheduledAppointments"]);

export default globalizeSelectors(localState, {
  appointmentError,
  pendingAppointment,
  scheduledAppointments
});
