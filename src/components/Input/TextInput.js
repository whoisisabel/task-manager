import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({
  id,
  label,
  placeholder,
  input,
  handleInput,
  required,
  disabled,
}) {
  return (
    <div className="mb-3 w-full">
      <TextField
      className="border-cyan-700"
        id={id}
        placeholder={placeholder}
        label={label}
        variant="outlined"
        fullWidth
        value={input}
        required={required}
        disabled={disabled}
        onChange={(e) => handleInput(e.target.value, e)}
      />
    </div>
  );
}
