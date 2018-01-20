import { merge } from "ramda";

import { SET_SELECTED_DAY } from "../constants/actionTypes";
import createReducer from "utils/createReducer";

import dateStringToCalednarEvent from "../utils/dateStringToCalendarEvent";

function setSelectedDay(state, { payload: { selectedDay } }) {
  return merge(state, { selectedDay: dateStringToCalednarEvent(selectedDay) });
}

const handlers = {
  [SET_SELECTED_DAY]: setSelectedDay
};

export default createReducer({}, handlers);
