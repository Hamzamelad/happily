import { createAppSlice } from "@/lib/redux/create-app-slice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Task } from "@prisma/client";
import { fetchTasks, postTasks } from "./tasks-api-slice";

export interface TaskType extends Task {
  saved: boolean;
}

export interface TasksSliceState {
  tasks: TaskType[];
  status: "idle" | "loading" | "failed";
  allSaved: boolean;
}

const initialState: TasksSliceState = {
  tasks: [],
  status: "idle",
  allSaved: false,
};

export const tasksSlice = createAppSlice({
  name: "tasks",
  initialState,
  reducers: (create) => ({
    setTask: create.reducer(
      (
        state,
        action: PayloadAction<{
          where?: { id?: number; saved?: boolean };
          data: TaskType;
        }>,
      ) => {
        state.tasks = [
          action.payload.data,
          ...state.tasks.filter((el) => {
            let filter = true;
            Object.keys(action.payload.where).forEach((key) => {
              if (el[key] === action.payload.where[key]) {
                filter = false;
              }
            });
            return filter;
          }),
        ];
      },
    ),
    setAllSaved: create.reducer((state, action: PayloadAction<boolean>) => {
      state.allSaved = action.payload;
    }),
    removeTask: create.reducer(
      (
        state,
        action: PayloadAction<{ where: { id?: number; saved?: boolean } }>,
      ) => {
        state.tasks = [
          ...state.tasks.filter((el) => {
            let filter = true;
            Object.keys(action.payload.where).forEach((key) => {
              if (el[key] === action.payload.where[key]) {
                filter = false;
              }
            });
            return filter;
          }),
        ];
      },
    ),
    getasksAsync: create.asyncThunk(
      async () => {
        const response = await fetchTasks();
        return response.data;
      },
      {
        pending: (state, action) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.tasks = [
            ...action.payload.map((el: Task) => ({ ...el, saved: true })),
          ];
        },
        rejected: (state, action) => {
          state.status = "failed";
        },
      },
    ),
    postTasksAsync: create.asyncThunk(
      async (newTaks: TaskType[]) => {
        const response = await postTasks(newTaks);
        return response;
      },
      {
        pending: (state) => {
          // state.status = "loading"
          // console.log('pending')
        },
        fulfilled: (state, action) => {
          state.tasks = [
            ...action.payload.data.map((el) => ({ ...el, saved: true })),
            ...action.payload.remained,
          ];
          state.allSaved = true;
        },
        rejected: (state) => {
          console.log("failed");
          // state.status = "failed"
        },
      },
    ),
  }),
  selectors: {
    selectTasks: (state) => state.tasks,
    selectStatus: (state) => state.status,
    selectAllSaved: (state) => state.allSaved,
  },
});

// action creators reterned by slice.actions
export const {
  getasksAsync,
  postTasksAsync,
  setTask,
  setAllSaved,
  removeTask,
} = tasksSlice.actions;

// selectors reterned by slice.selectors
export const { selectStatus, selectTasks, selectAllSaved } =
  tasksSlice.selectors;
