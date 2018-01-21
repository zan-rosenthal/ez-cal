import React from "react";
import Dialog from "modules/generic/components/Dialog";
import Input from "@bionikspoon/react-toolbox/lib/input";

export default function AppointmentCreationDialog({
  active,
  handleConfirm,
  handleCancel,
  handleSetContent,
  handleSetName,
  pendingAppointment: { name, content }
}) {
  const actions = [
    { label: "Cancel", onClick: handleCancel },
    { label: "Save", onClick: handleConfirm }
  ];

  return (
    <Dialog actions={actions} active={active}>
      <Input
        onChange={handleSetName}
        type="text"
        label="Name"
        value={name || ""}
      />
      {!name && <p>Please enter a name for your appointment</p>}
      <Input
        onChange={handleSetContent}
        type="textarea"
        label="Description"
        value={content || ""}
      />
      {!content && <p>Please enter a description for your appointment</p>}
    </Dialog>
  );
}
