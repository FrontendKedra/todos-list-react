import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    buttonState: { loading: false, success: false, error: false },
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex((task) => task.id === id);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: id }) => {
      const index = tasks.findIndex((task) => task.id === id);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.map((task) => (task.done = true));
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    exampleTasksLoading: ({ buttonState }) => {
      buttonState.loading = true;
    },
    exampleTasksSuccess: ({ buttonState }) => {
      buttonState.success = true;
      buttonState.loading = false;
    },
    exampleTasksError: ({ buttonState }) => {
      buttonState.error = true;
      buttonState.success = false;
      buttonState.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  exampleTasksLoading,
  exampleTasksSuccess,
  exampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state: RootState) => state.tasks;
export const selectTasks = (state: RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) =>
  selectTasksState(state).hideDone;
export const selectExampleTasks = (state: RootState) =>
  selectTasksState(state).buttonState.loading;

export const getTaskById = (state: RootState, taskId: string) =>
  selectTasks(state).find((task) => task.id.toString() === taskId);

export const selectTasksByQuery = (state: RootState, query: string | null) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
