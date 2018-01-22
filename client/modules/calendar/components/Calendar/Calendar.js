import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";

import AppointmentCreationDialog from "../AppointmentCreationDialog";

export default function Calendar({
  date,
  appointments,
  handleSelectDate,
  theme,
  shouldRenderAppointmentCreationDialog
}) {
  return (
    <div key="Calendar" className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={appointments}
        onDayClick={handleSelectDate}
      />
      <AppointmentCreationDialog
        active={shouldRenderAppointmentCreationDialog}
      />
    </div>
  );
}
