import {
  takeEvery,
  call,
  put,
  select,
  takeLatest,
  delay,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  exampleTasksError,
  exampleTasksSuccess,
  fetchExampleTasks,
  selectTasks,
  setTasks,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1500);
    yield put(exampleTasksSuccess());
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield put(exampleTasksError());
    yield call(alert, "cos poszlo nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}