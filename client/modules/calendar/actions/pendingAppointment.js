import { SET_SELECTED_DAY } from "../constants/actionTypes";

export function setSelectedDay(selectedDay) {
  return {
    type: SET_SELECTED_DAY,
    payload: { selectedDay }
  };
}
