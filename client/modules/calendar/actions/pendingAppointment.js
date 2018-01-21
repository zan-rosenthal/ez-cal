import {
  SET_APPOINTMENT_DATE,
  CLEAR_PENDING_APPOINTMENT,
  UPDATE_PENDING_APPOINTMENT
} from "../constants/actionTypes";

export const setAppointmentDate = selectedDay => ({
  type: SET_APPOINTMENT_DATE,
  payload: { selectedDay }
});

export const setAppointmentContent = content => ({
  type: UPDATE_PENDING_APPOINTMENT,
  payload: { content }
});

export const setAppointmentName = name => ({
  type: UPDATE_PENDING_APPOINTMENT,
  payload: { name }
});

export const clearPendingAppointment = () => ({
  type: CLEAR_PENDING_APPOINTMENT,
  payload: {}
});
