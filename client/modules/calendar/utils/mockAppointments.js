import { moment, today } from "../utils/moment";

export default [
  {
    content: "A short event",
    range: moment.range(today.clone(), today.clone().add(1, "day"))
  },
  {
    content: "Two Hours ~ 8-10",
    range: moment.range(today.clone().hour(8), today.clone().hour(10))
  }
];
