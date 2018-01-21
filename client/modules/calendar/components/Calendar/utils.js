import {
  append,
  compose,
  complement,
  converge,
  either,
  isNil,
  isEmpty,
  prop,
  reject
} from "ramda";
import Dayz from "dayz";

export const toDayzEventCollection = events =>
  new Dayz.EventsCollection(events);

export const combineAppointments = compose(
  reject(either(isNil, isEmpty)),
  converge(append, [prop("pendingAppointment"), prop("scheduledAppointments")])
);

export const formatAppointmentsForCalendar = compose(
  toDayzEventCollection,
  combineAppointments
);

export const shouldRenderAppointmentCreationDialog = compose(
  complement(isEmpty),
  prop("pendingAppointment")
);
