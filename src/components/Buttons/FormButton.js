import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";

export default function FormButton({ label, loading, action, disabled }) {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    height: "50px",
    fontSize: 16,
    textTransform: "none",
    backgroundColor: "#0279c0",
  }));

  return (
    <div className="mt-8">
      <ColorButton
        variant="contained"
        fullWidth
        disabled={disabled}
        loading={loading}
        loadingPosition="start"
        onClick={() => action()}
      >
        {label}
      </ColorButton>
    </div>
  );
}
