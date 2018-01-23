import React from "react";
import Dialog from "modules/generic/components/Dialog";

export default function ErrorDialog({
  active,
  error,
  clearPendingAppointment
}) {
  return (
    <Dialog active={active} onOverlayClick={clearPendingAppointment}>
      {error}
    </Dialog>
  );
}
