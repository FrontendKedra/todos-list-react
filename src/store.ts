import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import sagaRoot from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(sagaRoot);
