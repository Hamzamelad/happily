import { TaskType } from "./tasks-slice";

export const fetchTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks?type=todo");
  const result = await response.json();
  return result;
};

export const postTasks = async (data: TaskType[]) => {
  const clientIds: number[] = [];
  let unsaved = data.filter((el) => !el.saved);
  let saved = data.filter((el) => el.saved);
  let toPostData = [
    ...unsaved.map((el) => {
      const { saved, id, ...other } = el;
      clientIds.push(id);
      return other;
    }),
  ];

  const response = await fetch("http://localhost:3000/api/tassks?type=todo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toPostData),
  });
  const result: { data: TaskType[]; remained: TaskType[] } =
    await response.json();
  result.remained = saved;
  return result;
};
