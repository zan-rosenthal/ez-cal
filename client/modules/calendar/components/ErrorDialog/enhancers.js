import { applySpec, compose, identity } from "ramda";
import { connect } from "react-redux";

import Calendar from "../../selectors";
import { clearPendingAppointment } from "../../actions";

const mapStateToProps = applySpec({
  error: Calendar.appointmentError
});

export default compose(connect(mapStateToProps, { clearPendingAppointment }));
