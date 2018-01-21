import { applySpec, always, compose } from "ramda";
import { withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import withTheme from "utils/HOC/withTheme";

import { setAppointmentDate } from "../../actions";
import Calendar from "../../selectors";
import { today } from "../../utils/moment";
import {
  formatAppointmentsForCalendar,
  shouldRenderAppointmentCreationDialog
} from "./utils";
import theme from "./theme.scss";

const mapStateToProps = applySpec({
  pendingAppointment: Calendar.pendingAppointment,
  scheduledAppointments: Calendar.scheduledAppointments
});

const spec = applySpec({
  date: always(today),
  appointments: formatAppointmentsForCalendar,
  shouldRenderAppointmentCreationDialog
});

const handleSelectDay = props => (_, date) =>
  props.setAppointmentDate(date.toISOString());

export default compose(
  connect(mapStateToProps, { setAppointmentDate }),
  withProps(spec),
  withHandlers({ handleSelectDay }),
  withTheme(theme)
);
