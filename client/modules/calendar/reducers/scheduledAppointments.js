import { SAVE_APPOINTMENT } from "../constants/actionTypes";
import createReducer from "utils/createReducer";
import mockAppointments from "./mockAppointments";

function saveAppointment(state, { payload: { appointment } }) {
  const nextAppointments = state.scheduledAppointments.add(appointment);

  return { ...state, appointments: nextAppointments };
}

const handlers = {
  [SAVE_APPOINTMENT]: saveAppointment
};

export default createReducer(
  {
    scheduledAppointments: mockAppointments
  },
  handlers
);
