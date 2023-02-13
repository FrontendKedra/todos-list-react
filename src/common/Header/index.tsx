import { Title } from "../../types/interfaces";

const Header: React.FC<Title> = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

export default Header;
