import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Szymon Kędra"
      body={
        <>
          <p>
            Interesuję się wieloma rzeczami, między innymi: sportem,
            geopolityką, historią, <em>trochę</em>
            filozofią a ostatnio również
            programowaniem.
          </p>
        </>
      }
    />
  </Container>
);
