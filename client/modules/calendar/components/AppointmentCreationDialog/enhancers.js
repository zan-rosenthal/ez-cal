import { applySpec, compose, prop } from "ramda";
import { connect } from "react-redux";
import { withHandlers } from "recompose";

import {
  setAppointmentContent,
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
const handleSetContent = prop("setAppointmentContent");
const handleSetName = prop("setAppointmentName");

export default compose(
  connect(mapStateToProps, {
    setAppointmentContent,
    setAppointmentName,
    clearPendingAppointment,
    saveAppointment
  }),
  withHandlers({
    handleConfirm,
    handleCancel,
    handleSetContent,
    handleSetName
  })
);
