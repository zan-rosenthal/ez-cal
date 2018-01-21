import { moment } from "./moment";

export default date =>
  moment.range(moment(date).startOf("day"), moment(date).endOf("day"));
