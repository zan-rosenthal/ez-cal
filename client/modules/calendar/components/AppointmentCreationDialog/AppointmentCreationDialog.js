import React from "react";
import Dialog from "modules/generic/components/Dialog";
import Input from "@bionikspoon/react-toolbox/lib/input";

export default function AppointmentCreationDialog({
  active,
  handleConfirm,
  handleCancel,
  handleSetDescription,
  handleSetName
}) {
  const actions = [
    { label: "Cancel", onClick: handleCancel },
    { label: "Save", onClick: handleConfirm }
  ];

  return (
    <Dialog actions={actions} active={active}>
      <Input onChange={handleSetDescription} type="text" label="Name" />
      <Input onChange={handleSetName} type="textarea" label="Description" />
      <p>Please enter a description for your appointment</p>
    </Dialog>
  );
}
