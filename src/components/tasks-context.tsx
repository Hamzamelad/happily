"use client";

import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Task = {
  text: string;
  date: Date;
  isForm: boolean;
  isChecked: boolean;
};

type TasksContextType = {
  value?: any;
  addValue?: any;
};

const TasksContext = createContext<TasksContextType>({});
const useTasksContext = () => useContext(TasksContext);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<any>([]);

  const removeEmptyValues = () => {
    const currentValue = value;
    const newValue = currentValue.filter((el) => !el.isForm);
    setValue(newValue);
  };

  const addValue = (el: any) => {
    removeEmptyValues();
    setValue((c) => [el, ...c]);
  };

  useEffect(() => {
    // console.log(value)
  }, [value]);

  return (
    <TasksContext.Provider value={{ value: value, addValue: addValue }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider, useTasksContext };
