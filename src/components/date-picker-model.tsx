import React, { ReactNode, useState } from "react";
import DatePicker from "./date-picker";
import Modal from "./modal";
import IconButton from "@mui/material/IconButton";
import type { DatePickerProps } from "./date-picker";
import type { ModalProps } from "./modal";

type  DatePickerModalProps = DatePickerProps & ModalProps


const DatePickerModel = ({ open, setOpen, setValue, children }: DatePickerModalProps & {children: ReactNode}) => {
  const handleOpen = () => setOpen(true);

  return (
    <>
      <IconButton onClick={handleOpen}>
        {children}
      </IconButton>
      <Modal open={open} setOpen={setOpen}>
        <DatePicker setValue={setValue}/>
      </Modal>
    </>
  );
};

export default DatePickerModel;
