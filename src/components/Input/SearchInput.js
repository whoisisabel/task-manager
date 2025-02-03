import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({ input, handleInput, handleSearch }) {
  return (
    <Paper
      variant="outlined"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        boxShadow: "none",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={input}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Search for a task"
        inputProps={{ "aria-label": "search for a task" }}
      />
      <IconButton
        disableFocusRipple
        disableRipple
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
