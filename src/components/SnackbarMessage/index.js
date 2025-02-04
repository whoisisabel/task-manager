import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarMessage({ message, severity, open, onClose }) {
  const vertical = "bottom";
  const horizontal = "right";
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      key={vertical + horizontal}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
