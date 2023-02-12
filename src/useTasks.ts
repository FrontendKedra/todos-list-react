import { useState, useEffect } from "react";
import { Tasks } from "./types/interfaces";

export const useTasks = () => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");
  const parsedTasksFromLocalStorage: [] = tasksFromLocalStorage
    ? JSON.parse(tasksFromLocalStorage)
    : [];

  const [tasks, setTasks] = useState<Tasks[]>(
    parsedTasksFromLocalStorage
      ? parsedTasksFromLocalStorage
      : [
          { id: 1, content: "przejsc na Reacta", done: true },
          { id: 2, content: "zjesc obiad", done: false },
        ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id: number) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent: string) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };
};
