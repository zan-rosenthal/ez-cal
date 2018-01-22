import { applySpec, always, compose } from "ramda";
import { withHandlers, withProps } from "recompose";
import { connect } from "react-redux";
import withTheme from "utils/HOC/withTheme";

import { setAppointmentDate, setAppointmentError } from "../../actions";
import Calendar from "../../selectors";
import { today } from "../../utils/moment";
import {
  canAddAppointment,
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

const handleSelectDate = props => (_, date) =>
  canAddAppointment(date)(props.scheduledAppointments)
    ? props.setAppointmentDate(date.toISOString())
    : props.setAppointmentError(
        "There is already an appointment on that day, please select another"
      );

export default compose(
  connect(mapStateToProps, { setAppointmentDate, setAppointmentError }),
  withProps(spec),
  withHandlers({ handleSelectDate }),
  withTheme(theme)
);
