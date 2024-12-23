"use client";

import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import SectionHeader from "@/components/section-header";
import { TasksProvider } from "@/components/tasks-context";
import StepCard from "@/components/tasks/tasks-container";
import {
  getasksAsync,
  selectStatus,
  selectTasks,
} from "@/lib/redux/features/tasks-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const Steps = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getasksAsync());
  }, []);

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
