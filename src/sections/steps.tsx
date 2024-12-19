import React, { useEffect } from "react";
import StepCard from "@/components/step-card";
import Box from "@mui/material/Box";
import SectionHeader from "@/components/section-header";
import { TasksProvider } from "@/components/tasks-context";


const Steps = () => {
  return (
    <Box mb={8}>
      <SectionHeader title="Tasks" />
      <Box display={"flex"} gap={2}>
        <TasksProvider>
          <StepCard title="Todo" type="todo" />
          {/* <StepCard title="Not Todo" type="not" /> */}
        </TasksProvider>
      </Box>
    </Box>
  );
};

export default Steps;
