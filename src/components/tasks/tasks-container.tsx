"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import {
  postTasksAsync,
  removeTask,
  selectAllSaved,
  selectStatus,
  selectTasks,
} from "@/lib/redux/features/tasks-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { TaskElement } from "./task-element";

const StepCard = ({ title, type }: { title: string; type: string }) => {
  const [hidden, setHidden] = useState(true);
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const status = useAppSelector(selectStatus);
  const allSaved = useAppSelector(selectAllSaved);

  useEffect(() => {
    if (!allSaved) {
      dispatch(postTasksAsync(tasks));
    }
    setHidden(true);
    console.log(tasks);
  }, [allSaved]);
  return (
    <Box flexGrow={1} borderRadius={3} sx={{ border: "solid 1px", p: 2 }}>
      <button onClick={() => dispatch(removeTask({ where: { id: 212 } }))}>
        remove 212
      </button>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={() => setHidden(false)}>
          <Add />
        </IconButton>
      </Box>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {status === "loading" && <span>loading...</span>}
        {status === "failed" && <span>failed :( try again</span>}
        {!hidden ? (
          <TaskElement
            el={{
              id: Number(tasks[0]?.id) + 1 || 0,
              text: "",
              state: "todo",
              type: "todo",
              data: new Date(),
              saved: false,
            }}
          />
        ) : null}
        //
        {tasks ? [...tasks].map((el) => <TaskElement el={el} />) : null}
      </List>
    </Box>
  );
};

export default StepCard;
