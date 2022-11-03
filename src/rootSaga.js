import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* sagaRoot() {
    yield all([
        watchFetchExampleTasks(), 
  ]);
}
