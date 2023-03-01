import Form from "../TasksPage/Form";
import TaskList from "./TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";
import ExampleTasksButton from "../ExampleTasksButton";

const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleTasksButton />}
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;
