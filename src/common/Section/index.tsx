import { SectionProps } from "../../interfaces/interfaces";
import { StyledSection, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </StyledSection>
);

export default Section;
