import { applySpec, compose, prop } from "ramda";
import { connect } from "react-redux";
import { withHandlers } from "recompose";

import {
  setAppointmentDescription,
  setAppointmentName,
  clearPendingAppointment,
  saveAppointment
} from "../../actions";
import Calendar from "../../selectors";

const mapStateToProps = applySpec({
  pendingAppointment: Calendar.pendingAppointment
});

const handleConfirm = props => () => {
  props.saveAppointment(props.pendingAppointment);
  props.clearPendingAppointment();
};

const handleCancel = prop("clearPendingAppointment");
const handleSetDescription = prop("setAppointmentDescription");
const handleSetName = prop("setAppointmentName");

export default compose(
  connect(mapStateToProps, {
    setAppointmentDescription,
    setAppointmentName,
    clearPendingAppointment,
    saveAppointment
  }),
  withHandlers({
    handleConfirm,
    handleCancel,
    handleSetDescription,
    handleSetName
  })
);
