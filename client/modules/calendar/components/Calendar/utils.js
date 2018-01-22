import {
  all,
  append,
  compose,
  complement,
  converge,
  curry,
  either,
  equals,
  isNil,
  isEmpty,
  map,
  path,
  prop,
  reject,
  where
} from "ramda";
import Dayz from "dayz";
import renderEventTitle from "./EventTitle";

export const toDayzEventCollection = events =>
  new Dayz.EventsCollection(events);

const emptyOrNil = either(isNil, isEmpty);

export const combineAppointments = compose(
  reject(where({ range: emptyOrNil })),
  converge(append, [prop("pendingAppointment"), prop("scheduledAppointments")])
);

export const formatAppointmentsForCalendar = compose(
  toDayzEventCollection,
  map(renderEventTitle),
  combineAppointments
);

export const shouldRenderAppointmentCreationDialog = compose(
  complement(emptyOrNil),
  path(["pendingAppointment", "range"])
);

const rangeContainsDate = curry((date, { range }) => range.contains(date));

export const canAddAppointment = selectedDate =>
  compose(all(equals(false)), map(rangeContainsDate(selectedDate)));
