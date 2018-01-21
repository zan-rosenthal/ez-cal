import { path } from "ramda";
import { globalizeSelectors } from "zeal-redux-utils";

const localState = path(["app", "calendar"]);

const pendingAppointment = path(["pendingAppointment"]);
const scheduledAppointments = path(["scheduledAppointments"]);

export default globalizeSelectors(localState, {
  pendingAppointment,
  scheduledAppointments
});
