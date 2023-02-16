import { SectionProps } from "../../interfaces/interfaces";
import { StyledSection, Header, Title } from "./styled";

const Section: React.FC<SectionProps> = ({
  title,
  body,
  extraHeaderContent,
}) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </StyledSection>
);

export default Section;
