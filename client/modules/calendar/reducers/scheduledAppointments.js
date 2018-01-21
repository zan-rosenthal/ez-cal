import { append } from "ramda";
import { SAVE_APPOINTMENT } from "../constants/actionTypes";
import createReducer from "utils/createReducer";
import mockAppointments from "../utils/mockAppointments";

export function saveAppointment(state, { payload: { appointment } }) {
  return append(appointment, state);
}

const handlers = {
  [SAVE_APPOINTMENT]: saveAppointment
};

export default createReducer([...mockAppointments], handlers);
