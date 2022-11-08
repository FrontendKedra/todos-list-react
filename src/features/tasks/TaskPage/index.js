import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "nie znaleziono zadania :("}
        body={
          <>
            {task ? <strong>Ukończone:</strong> : ""}{" "}
            {task ? (task.done ? "tak" : "nie") : ""}
          </>
        }
      />
    </Container>
  );
};

export default TaskPage;
