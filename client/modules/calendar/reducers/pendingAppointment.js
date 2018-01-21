import { SET_SELECTED_DAY } from "../constants/actionTypes";
import createReducer from "utils/createReducer";

import convertToDateRange from "../utils/convertToDateRange";

function setSelectedDay(state, { payload: { selectedDay } }) {
  return {
    range: convertToDateRange(selectedDay)
  };
}

const handlers = {
  [SET_SELECTED_DAY]: setSelectedDay
};

export default createReducer({}, handlers);
