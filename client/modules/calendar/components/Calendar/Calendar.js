import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";

export default function Calendar({ date, appointments, onDayClick, theme }) {
  return (
    <div className={theme.container}>
      <Dayz
        display="month"
        date={date}
        events={appointments}
        onDayClick={onDayClick}
      />
    </div>
  );
}
