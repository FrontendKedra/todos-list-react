import { StyledSection, Header, Title } from "./styled";

interface SectionProps {
  title: string;
  body: JSX.Element;
  extraHeaderContent?: JSX.Element | undefined;
}

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
