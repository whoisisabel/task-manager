import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateInput({ id, label, input, handleInput, disabled }) {
  const handleDate = (date) => {
    const e = {
      target: {
        id: id,
        value: date,
      },
    };
    handleInput(date, e);
  };

  return (
    <div className="mb-3 w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            className="w-full"
            label={label}
            value={input ? dayjs(input) : null}
            onChange={(newValue) => handleDate(newValue)}
            disabled={disabled}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
