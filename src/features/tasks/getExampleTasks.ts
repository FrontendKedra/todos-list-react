import { Tasks } from "../../types/interfaces";

export const getExampleTasks = async () => {
  const response = await fetch("https://frontendkedra.github.io/todos-list-react/exampleTasks.json");
  if (!response.ok) {
    new Error(response.statusText);
  }

  return (await response.json()) as Promise<Tasks[]>;
};
