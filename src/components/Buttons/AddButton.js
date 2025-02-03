import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({ handleClick }) {
  return (
    <IconButton
      disableRipple
      disableFocusRipple
      aria-label="add"
      onClick={() => handleClick()}
      sx={{ padding: 0, paddingRight: 1 }}
    >
      <AddIcon />
    </IconButton>
  );
}
