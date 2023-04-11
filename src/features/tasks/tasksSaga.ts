import {
  takeEvery,
  call,
  put,
  select,
  takeLatest,
  delay,
} from "redux-saga/effects";
import { Tasks } from "../../interfaces/interfaces";
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
  yield delay(1500);

  try {
    yield put(exampleTasksSuccess());
    const exampleTasks: Tasks[] = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield put(exampleTasksError());
    yield call(alert, "Coś poszło nie tak, spróbuj ponownie");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks: Tasks[] = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
