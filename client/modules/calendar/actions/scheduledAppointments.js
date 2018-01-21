import { SAVE_APPOINTMENT } from "../constants/actionTypes";

export const saveAppointment = appointment => ({
  type: SAVE_APPOINTMENT,
  payload: { appointment }
});
