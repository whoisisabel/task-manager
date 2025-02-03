import React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function SnackbarMessage({ open, handleClose, message }) {
  const vertical = "bottom";
  const horizontal = "right";

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </Box>
  );
}
