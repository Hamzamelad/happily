import React from "react";
import TextField from "@mui/material/TextField";

const TaskForm = () => {
  return (
    <form>
      <TextField
        hiddenLabel
        id="text-input"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
    </form>
  );
};

export default TaskForm;
