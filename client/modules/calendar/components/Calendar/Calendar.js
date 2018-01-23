import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";

import AppointmentCreationDialog from "../AppointmentCreationDialog";
import Dialog from "modules/generic/components/Dialog";

export default function Calendar({
  date,
  appointments,
  clearPendingAppointment,
  error,
  handleSelectDate,
  theme,
  setAppointmentError,
  shouldRenderAppointmentCreationDialog,
  shouldRenderAppointmentErrorDialog
}) {
  return (
    <div key="Calendar" className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={appointments}
        onEventClick={setAppointmentError}
        onDayClick={handleSelectDate}
      />
      <AppointmentCreationDialog
        active={shouldRenderAppointmentCreationDialog}
      />
      <Dialog
        active={shouldRenderAppointmentErrorDialog}
        onOverlayClick={clearPendingAppointment}
      >
        {error}
      </Dialog>
    </div>
  );
}
