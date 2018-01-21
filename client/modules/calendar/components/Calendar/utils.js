import {
  append,
  compose,
  converge,
  either,
  isNil,
  isEmpty,
  prop,
  reject
} from "ramda";
import Dayz from "dayz";

const toDayzEventCollection = events => new Dayz.EventsCollection(events)

export const combineAppointments = compose(
  toDayzEventCollection,
  reject(either(isNil, isEmpty)),
  converge(append, [prop("pendingAppointment"), prop("scheduledAppointments")])
);
