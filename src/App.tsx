import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, UnorderedList } from "./styled";

export const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <nav>
      <UnorderedList>
        <li>
          <StyledNavLink activeClassName="active" to="/zadania">
            Zadania
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink activeClassName="active" to="/autor">
            O autorze
          </StyledNavLink>
        </li>
      </UnorderedList>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
