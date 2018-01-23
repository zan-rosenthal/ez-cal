import { applySpec, compose, identity } from "ramda";
import { connect } from "react-redux";
import Calendar from "../../selectors";

const mapStateToProps = applySpec({
  error: Calendar.appointmentError
});

export default compose(connect(mapStateToProps));
