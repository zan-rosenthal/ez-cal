import { compose, path } from "ramda";
import { globalizeSelectors } from "zeal-redux-utils";

const localState = path(["app", "calendar"]);

const selectedDay = path(["selectedDay"]);
const pendingAppointment = path(["pendingAppointment"]);

export default globalizeSelectors(localState, {
  selectedDay,
  pendingAppointment
});
