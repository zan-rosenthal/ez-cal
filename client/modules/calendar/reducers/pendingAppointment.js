import { SET_SELECTED_DAY } from "../constants/actionTypes";
import createReducer from "utils/createReducer";

import convertToDateRange from "../utils/convertToDateRange";

const setSelectedDay = (state, { payload: { selectedDay } }) => ({
  range: convertToDateRange(selectedDay)
});

const handlers = {
  [SET_SELECTED_DAY]: setSelectedDay
};

export default createReducer({}, handlers);
