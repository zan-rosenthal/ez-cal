import { combineReducers } from "redux";

import { calendarReducer } from "modules/calendar";

export default combineReducers({
  calendar: calendarReducer
});
