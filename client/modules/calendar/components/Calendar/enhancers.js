import { applySpec, always, compose } from "ramda";
import { withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import withTheme from "utils/HOC/withTheme";

import {
  clearPendingAppointment,
  setAppointmentDate,
  setAppointmentError
} from "../../actions";
import Calendar from "../../selectors";
import { today } from "../../utils/moment";
import {
  canAddAppointment,
  formatAppointmentsForCalendar,
  shouldRenderAppointmentCreationDialog,
  shouldRenderAppointmentErrorDialog
} from "./utils";
import theme from "./theme.scss";

const mapStateToProps = applySpec({
  error: Calendar.appointmentError,
  pendingAppointment: Calendar.pendingAppointment,
  scheduledAppointments: Calendar.scheduledAppointments
});

const spec = applySpec({
  date: always(today),
  appointments: formatAppointmentsForCalendar,
  shouldRenderAppointmentErrorDialog,
  shouldRenderAppointmentCreationDialog
});

const handleSelectDate = props => (_, date) =>
  canAddAppointment(date)(props.scheduledAppointments)
    ? props.setAppointmentDate(date.toISOString())
    : props.setAppointmentError(
        "There is already an appointment on that day, please select another"
      );

export default compose(
  connect(mapStateToProps, {
    clearPendingAppointment,
    setAppointmentDate,
    setAppointmentError
  }),
  withProps(spec),
  withHandlers({ handleSelectDate }),
  withTheme(theme)
);
