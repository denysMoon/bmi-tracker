import { Container } from "./styles/Container.styled";
import { Text } from "./styles/Text.styled";

const About = () => {
  return (
    <Container>
      <Text>
        Body mass index (BMI) is a value derived from the mass (weight) and
        height of a person. The BMI is defined as the body mass divided by the
        square of the body height, and is expressed in units of kg/m2, resulting
        from mass in kilograms and height in metres.
      </Text>
    </Container>
  );
};

export default About;
