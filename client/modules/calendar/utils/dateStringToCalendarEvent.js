import { compose } from "ramda";
import Dayz from "dayz";

import { moment, today, nextMonth } from "./moment";

const ISOStringToOneDateRange = date =>
  moment.range(moment(date).startOf("day"), moment(date).endOf("day"));

export default date =>
  new Dayz.EventsCollection([
    {
      range: ISOStringToOneDateRange(date)
    }
  ]);
