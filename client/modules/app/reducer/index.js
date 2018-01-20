import { combineReducers } from "redux";
import createReducer from "utils/createReducer";

import { calendarReducer } from "modules/calendar";

export default combineReducers({
  calendar: calendarReducer
});
