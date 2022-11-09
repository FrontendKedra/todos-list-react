import { useDispatch } from "react-redux";
import { Button } from "../TasksPage/Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default ExampleTasksButton;
