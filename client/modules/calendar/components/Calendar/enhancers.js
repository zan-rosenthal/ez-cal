import { applySpec, always, compose, concat, identity, prop } from "ramda";
import { withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import withTheme from "utils/HOC/withTheme";

import { setSelectedDay } from "../../actions";
import Calendar from "../../selectors";
import { moment, today } from "../../utils/moment";
import theme from "./theme.scss";

const mapStateToProps = applySpec({
  selectedDay: Calendar.selectedDay,
  pendingAppointment: Calendar.pendingAppointment
});

const spec = applySpec({
  date: always(today)
  // events
});

const onDayClick = ({ setSelectedDay }) => (_, date) =>
  setSelectedDay(date.toISOString());

export default compose(
  connect(mapStateToProps, { setSelectedDay }),
  withProps(spec),
  withHandlers({ onDayClick }),
  withTheme(theme)
);
