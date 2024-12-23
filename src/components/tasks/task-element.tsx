"use client";

import { useEffect, useRef, useState, useReducer, ChangeEvent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import { setAllSaved, TaskType } from "@/lib/redux/features/tasks-slice";
import { CalendarIcon } from "@mui/x-date-pickers/icons";

import TextAreaAuto from "../textarea-autosized";
import DatePickerModel from "../date-picker-model";
import ClickAway from "../click-away-listener";
import { setTask, selectAllSaved } from "@/lib/redux/features/tasks-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

interface TaskElementProps {
  el: TaskType;
  newTask?: boolean;
}

enum taskActionType {
  setText = "setText",
  setDate = "setDate",
  setState = "handleCheck",
}

interface taskAction {
  type?: taskActionType;
  payload: TaskType;
}

const reducer = (state: TaskType, action: taskAction) => {
  const { type, payload } = action;

  switch (type) {
    case taskActionType.setText:
      return {
        ...state,
        text: payload.text,
      };
    case taskActionType.setDate:
      return {
        ...state,
        data: payload.data,
      };
    case taskActionType.setState:
      return {
        ...state,
        state: payload.state,
      };
    default:
      return payload;
  }
};

export const TaskElement = ({ el }: TaskElementProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(!el.text);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [date, setDate] = useState();
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const appDispatch = useAppDispatch();
  const [state, dispatch] = useReducer(reducer, {
    id: el.id,
    text: el.text,
    state: "todo",
    type: "todo",
    data: new Date(),
    saved: false,
  });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: taskActionType.setText,
      payload: { ...state, text: event.target.value, saved: false },
    });
  };

  // This function will act as a submit button, being triggered after the user clicks away.
  const handleClickAway = async () => {
    // stop the function if the TaskElement isn't active, because you don't want
    // all the other unactive TaskElements to excute handleClickAway function.
    if (!isFocus || !state.text) return;
    // insure to remove this task from the global state by removing
    // all the empty tasks if the user left the textArea empty after clicking away.
    // if (!state.text) {
    //     // appDispatch(removeEmbty());
    //     return;
    // }
    // add the entered data to the global state.
    if (!state.saved) {
      appDispatch(setTask({ data: state }));
      appDispatch(setAllSaved(false));
    }
    setIsFocus(false);
  };

  useEffect(() => {
    if (textRef.current && isFocus) {
      textRef.current.focus();
    }
  }, [focus]);

  useEffect(() => {
    dispatch({
      payload: {
        id: el.id,
        text: el.text,
        state: "todo",
        type: "todo",
        data: new Date(),
        saved: el.saved,
      },
    });
  }, [el]);
  return (
    <>
      <p>{el.id}</p>
      <ListItem
        // onBlur={() => console.log(el.id, 'blur')}
        // onFocus={() => console.log(el.id, 'focus')}
        disablePadding
        secondaryAction={
          <Checkbox
            onChange={(_, checked) => {
              dispatch({
                type: taskActionType.setState,
                payload: { ...state, state: checked ? "done" : "todo" },
              });
            }}
            edge="end"
          />
        }
        sx={{
          display: "block",
          order: !el.text ? 0 : null,
          "&:focus-within": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
          "& .MuiListItemSecondaryAction-root": {},
        }}
      >
        <ClickAway handleClickAway={handleClickAway}>
          <ListItemButton
            onClick={() => {
              setIsFocus(true);
              textRef.current?.focus();
            }}
            disableRipple
            sx={{ display: "block" }}
          >
            <ListItemText>
              <TextAreaAuto
                ref={textRef}
                onChange={handleChange}
                placeholder="type a task.."
                value={state.text}
              />
            </ListItemText>
            <DatePickerModel
              setValue={setDate}
              open={openCalender}
              setOpen={setOpenCalender}
            >
              {!el.text ? (
                <CalendarIcon />
              ) : (
                <Chip label={el.data.toString()} onClick={() => ""} />
              )}
            </DatePickerModel>
          </ListItemButton>
        </ClickAway>
      </ListItem>
    </>
  );
};
