import { Title } from "../../types/interfaces";

const Header = ({ title }: Title) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;
