import { SET_SELECTED_DAY } from "../constants/actionTypes";

export const setSelectedDay = selectedDay => ({
  type: SET_SELECTED_DAY,
  payload: { selectedDay }
});
