import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({
  id,
  label,
  selectArray,
  input,
  handleInput,
  disabled,
}) {
  return (
    <div className="mb-3 w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          name={id}
          fullWidth
          value={input}
          label={label}
          onChange={(e) => handleInput(e)}
          disabled={disabled}
        >
          {selectArray.map((selectItem, index) => (
            <MenuItem key={index} value={selectItem.value}>
              {selectItem.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
