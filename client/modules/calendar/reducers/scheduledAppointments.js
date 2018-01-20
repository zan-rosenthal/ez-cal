import { append } from 'ramda'
import { SAVE_APPOINTMENT } from "../constants/actionTypes";
import createReducer from "utils/createReducer";
import mockAppointments from "./mockAppointments";

function saveAppointment(state, { payload: { appointment } }) {
  const nextAppointments = append(appointment, state.scheduledAppointments);

  return { ...state, appointments: nextAppointments };
}

const handlers = {
  [SAVE_APPOINTMENT]: saveAppointment
};

export default createReducer(
  {...mockAppointments},
  handlers
);
