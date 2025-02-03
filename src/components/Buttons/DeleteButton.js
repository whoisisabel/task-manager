import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton({ handleClick }) {
  return (
    <IconButton
      disableRipple
      disableFocusRipple
      aria-label="delete"
      color="error"
      onClick={() => handleClick()}
    >
      <DeleteIcon />
    </IconButton>
  );
}
