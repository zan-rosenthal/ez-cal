import { combineReducers } from "redux";

import pendingAppointment from "./pendingAppointment";
import scheduledAppointments from "./scheduledAppointments";

export default combineReducers({
  pendingAppointment,
  scheduledAppointments
});
