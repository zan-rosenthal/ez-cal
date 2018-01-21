import { always, merge } from "ramda";

import {
  SET_APPOINTMENT_DATE,
  CLEAR_PENDING_APPOINTMENT,
  UPDATE_PENDING_APPOINTMENT
} from "../constants/actionTypes";
import createReducer from "utils/createReducer";

import convertToDateRange from "../utils/convertToDateRange";

const setAppointmentDate = (state, { payload: { selectedDay } }) => ({
  range: convertToDateRange(selectedDay)
});

const clearPendingAppointment = always({});

const updatePendingAppointment = (state, { payload }) => merge(state, payload);

const handlers = {
  [SET_APPOINTMENT_DATE]: setAppointmentDate,
  [CLEAR_PENDING_APPOINTMENT]: clearPendingAppointment,
  [UPDATE_PENDING_APPOINTMENT]: updatePendingAppointment
};

export default createReducer({}, handlers);
