import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/styled";
import {
  fetchExampleTasks,
  selectExampleTasks,
  exampleTasksLoading,
} from "../tasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const buttonState = useSelector(selectExampleTasks);
  return (
    <Button
      disabled={buttonState}
      onClick={() => {
        dispatch(fetchExampleTasks());
        dispatch(exampleTasksLoading());
      }}
    >
    {buttonState ? "Trwa pobieranie zadań" : "Pobierz przykładowe zadania"} 
      
    </Button>
  );
};

export default ExampleTasksButton;
