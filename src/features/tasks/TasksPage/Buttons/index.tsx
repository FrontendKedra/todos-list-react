import { Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
} from "../../tasksSlice";
import { Button } from "../../Button/styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  );
};

export default Buttons;
