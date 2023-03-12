import { Tasks } from "../../interfaces/interfaces";

export const getExampleTasks = async () => {
  const response = await fetch("/todos-list-react/exampleTasks.json");
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Promise<Tasks[]>;
};
