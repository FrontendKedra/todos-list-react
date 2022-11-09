import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";
import { Paragraph } from "./styled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Szymon Kędra"
      body={
        <>
          <Paragraph>
            Interesuję się wieloma rzeczami, między innymi: sportem,
            geopolityką, historią, <em>trochę</em>
            filozofią a ostatnio również programowaniem.
          </Paragraph>
        </>
      }
    />
  </Container>
);

export default AuthorPage;
