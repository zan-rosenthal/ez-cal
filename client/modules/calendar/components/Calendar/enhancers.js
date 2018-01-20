import { applySpec, always, compose, identity } from "ramda";
import { withHandlers, withProps } from "recompose";
import Moment from "moment";
import { extendMoment } from "moment-range";
import Dayz from "dayz";

import withTheme from "utils/HOC/withTheme";

import theme from "./theme.scss";

export const moment = extendMoment(Moment);

const date = moment();

const events = props =>
  new Dayz.EventsCollection([
    {
      content: "A short event",
      range: moment.range(date.clone(), date.clone().add(1, "day"))
    },
    {
      content: "Two Hours ~ 8-10",
      range: moment.range(date.clone().hour(8), date.clone().hour(10))
    },
    {
      content: "A Longer Event",
      range: moment.range(
        date.clone().subtract(2, "days"),
        date.clone().add(8, "days")
      )
    }
  ]);

const spec = applySpec({
  date: always(date),
  events
});

export default compose(withProps(spec), withTheme(theme));
