import { values } from 'ramda'
import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer

export default function Calendar({ date, scheduledAppointments, onDayClick, theme }) {
  const events = new Dayz.EventsCollection(values(scheduledAppointments))
  return (
    <div className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={events}
        onDayClick={onDayClick}
      />
    </div>
  );
}
