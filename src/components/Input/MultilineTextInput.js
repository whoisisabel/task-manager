import * as React from "react";
import TextField from "@mui/material/TextField";

export default function MultilineTextInput({
  id,
  label,
  placeholder,
  input,
  handleInput,
  required,
  disabled,
}) {
  return (
    <div className="mb-1 w-full">
      <TextField
        id={id}
        placeholder={placeholder}
        label={label}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={input}
        required={required}
        disabled={disabled}
        onChange={(e) => handleInput(e.target.value, e)}
      />
    </div>
  );
}
