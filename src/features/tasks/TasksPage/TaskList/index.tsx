import { List, Item, Content, Button, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../../queryParameters";
import { RootState } from "../../../../store";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);

  const tasks = useSelector((state: RootState) =>
    selectTasksByQuery(state, query)
  );
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            remove={false}
          >
            {task.done ? "✔️" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
