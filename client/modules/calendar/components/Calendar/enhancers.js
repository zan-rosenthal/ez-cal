import { applySpec, always, compose } from "ramda";
import { withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import withTheme from "utils/HOC/withTheme";

import { setSelectedDay } from "../../actions";
import Calendar from "../../selectors";
import { today } from "../../utils/moment";
import { combineAppointments } from "./utils";
import theme from "./theme.scss";

const mapStateToProps = applySpec({
  pendingAppointment: Calendar.pendingAppointment,
  scheduledAppointments: Calendar.scheduledAppointments
});

const spec = applySpec({
  date: always(today),
  appointments: combineAppointments
});

const onDayClick = (props) => (_, date) =>
  props.setPendingAppointment(date.toISOString());

export default compose(
  connect(mapStateToProps, { setSelectedDay }),
  withProps(spec),
  withHandlers({ onDayClick }),
  withTheme(theme)
);
