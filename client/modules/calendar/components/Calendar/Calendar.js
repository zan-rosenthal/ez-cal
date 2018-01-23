import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";

import AppointmentCreationDialog from "../AppointmentCreationDialog";
import ErrorDialog from "../ErrorDialog";

export default function Calendar({
  date,
  appointments,
  clearPendingAppointment,
  error,
  handleSelectDate,
  handleAppointmentCreationError,
  theme,
  shouldRenderAppointmentCreationDialog,
  shouldRenderAppointmentErrorDialog
}) {
  return (
    <div key="Calendar" className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={appointments}
        onEventClick={handleAppointmentCreationError}
        onDayClick={handleSelectDate}
      />
      <AppointmentCreationDialog
        active={shouldRenderAppointmentCreationDialog}
      />
      <ErrorDialog
        active={shouldRenderAppointmentErrorDialog}
        onOverlayClick={clearPendingAppointment}
      />
    </div>
  );
}
