import React from "react";
import Dayz from "dayz";
import "dayz/dist/dayz.css";
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer

export default function(props) {
  return (
    <div className={props.theme.container}>
      <Dayz display="week" date={props.date} events={props.events} />
    </div>
  );
}
