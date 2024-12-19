"use client";

import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { IconButton, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Task } from "@prisma/client";
import { CalendarIcon } from "@mui/x-date-pickers/icons";

import TextAreaAuto from "./textarea-autosized";
import DatePickerModel from "./date-picker-model";
import ClickAway from "./click-away-listener";
import { TasksProvider, useTasksContext } from "./tasks-context";


function generate(element: React.ReactElement<unknown>) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

let id = 0

const StepCard = ({ title, type }: { title: string; type: string }) => {
  const { value, addValue } = useTasksContext();

  const addTask = () => {
    addValue((c) => [{
      id: id,
      text: "",
      state: "todo",
      type: "todo",
      isForm: true
    },
    ...c])
    id++
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/tasks?type=${type}`)
  //     .then((res) => res.json())
  //     .then((json) => setTasks(json.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Box flexGrow={1} borderRadius={3} sx={{ border: "solid 1px", p: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={addTask}>
          <Add />
        </IconButton>
      </Box>
      <List >
        {value.map((el) => (<TaskElement el={el} />))}
      </List>
    </Box>
  );
};

export const TaskElement = ({ el }: { el: any }) => {
  const [date, setDate] = useState();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const textRef = useRef<HTMLTextAreaElement>(null)
  const { value, addValue } = useTasksContext();

  const handleClickAway = () => {
    // validate 
    if (!textRef.current || !textRef.current.value || el.isForm) return

    // make object of setted data
    const newTask = {
      text: textRef.current.value,
      date,
      isChecked,
      isForm: false
    }

    // add task to tasks
    const prevTasks = [...value]
    addValue([newTask, ...prevTasks])
  }

  useEffect(() => {
    // console.log(el)
  }, [])

  return (
    <ListItem
      key={el.id}
      disablePadding
      secondaryAction={<Checkbox onChange={(_, checked) => setIsChecked(checked)} edge="end" />}
      sx={{
        display: "block",
        "& .MuiListItemSecondaryAction-root": {},
      }}
    >
      <ClickAway handleClickAway={handleClickAway}>
        <ListItemButton autoFocus={el.isForm} disableRipple sx={{ display: 'block' }}>
          <ListItemText>
            <TextAreaAuto ref={textRef} autoFocus={el.isForm} placeholder="type a task.." defaultValue={el.text} />
          </ListItemText>
          <DatePickerModel setValue={setDate} open={openCalender} setOpen={setOpenCalender}>
            {el.isForm ? (
              <CalendarIcon />
            ) : (
              date
            )}
          </DatePickerModel>
        </ListItemButton>
      </ClickAway>
    </ListItem>
  )
}

export default StepCard;
