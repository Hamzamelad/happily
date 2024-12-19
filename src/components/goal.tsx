import React from "react";
import ProgressCard from "./progress-card";
import Typography from "@mui/material/Typography";

export type GoalProps = {};

const Goal = () => {
  return (
    <ProgressCard size={70}>
      <Typography variant="h6">found a compay</Typography>
      <Typography variant="subtitle2" color="primary">
        12 nov 2025
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        maxime dicta nostrum, laborum saepe.
      </Typography>
    </ProgressCard>
  );
};

export default Goal;
