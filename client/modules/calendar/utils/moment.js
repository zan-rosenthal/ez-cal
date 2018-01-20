import Moment from "moment";
import { extendMoment } from "moment-range";

export const moment = extendMoment(Moment);

export const today = moment();
export const nextMonth = today.add(1, "M");
