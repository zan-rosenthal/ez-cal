import {
  append,
  compose,
  complement,
  converge,
  either,
  isNil,
  isEmpty,
  map,
  prop,
  reject
} from "ramda";
import Dayz from "dayz";
import renderEventTitle from "./EventTitle";

export const toDayzEventCollection = events =>
  new Dayz.EventsCollection(events);

export const combineAppointments = compose(
  reject(either(isNil, isEmpty)),
  converge(append, [prop("pendingAppointment"), prop("scheduledAppointments")])
);

export const formatAppointmentsForCalendar = compose(
  toDayzEventCollection,
  map(renderEventTitle),
  combineAppointments
);

export const shouldRenderAppointmentCreationDialog = compose(
  complement(isEmpty),
  prop("pendingAppointment")
);
