import { Tasks } from "../../interfaces/interfaces";

const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Tasks[]) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = (): Tasks[] => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};
