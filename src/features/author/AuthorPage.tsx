import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";
import { Paragraph } from "./styled";

const AuthorPage: React.FC = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Szymon Kędra"
      body={
        <>
          <Paragraph>
            Interesuję się wieloma rzeczami, między innymi: sportem,
            geopolityką, historią, trochę filozofią a ostatnio również
            programowaniem. Lubię spacery po okolicznym lesie, lubię czytać
            książki, ale tylko fantasy i science fiction, jeśli chodzi o
            zdobywanie wiedzy to preferuje internet i kursy. Najciekawszym
            okresem historycznym jest według mnie starożytność i bitwy rzymskie
            oraz blisko wschodnie.
          </Paragraph>
        </>
      }
    />
  </Container>
);

export default AuthorPage;
