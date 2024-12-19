"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";



export type DatePickerProps = {
  setValue: (arg: any) => void
}

export default function DatePicker({ setValue }: DatePickerProps) {
  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar onChange={setValue} />
      </LocalizationProvider>
    </div>
  );
}
