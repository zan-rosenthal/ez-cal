import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";

import Dialog from "modules/generic/components/Dialog";

import AppointmentCreationDialog from "../AppointmentCreationDialog";

export default function Calendar({
  date,
  appointments,
  handleSelectDay,
  theme,
  shouldRenderAppointmentCreationDialog
}) {
  return (
    <div key="Calendar" className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={appointments}
        onDayClick={handleSelectDay}
      />
      <AppointmentCreationDialog
        active={shouldRenderAppointmentCreationDialog}
      />
    </div>
  );
}
