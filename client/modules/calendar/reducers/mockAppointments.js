import { moment, today, nextMonth } from "../utils/moment";
import Dayz from "dayz";

export default [
  {
    content: "A short event",
    range: moment.range(today.clone(), today.clone().add(1, "day"))
  },
  {
    content: "Two Hours ~ 8-10",
    range: moment.range(today.clone().hour(8), today.clone().hour(10))
  },
  {
    content: "A Longer Event",
    range: moment.range(
      today.clone().subtract(2, "days"),
      today.clone().add(8, "days")
    )
  }
]
