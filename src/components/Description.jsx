import { useSelector } from "react-redux";
import { showDesription } from "../utils/func";
import { Container } from "./styles/Container.styled";
import { Text } from "./styles/Text.styled";

const Description = () => {
  const userData = useSelector((store) => store.bmi.bmi);

  return (
    <Container>
      <Text>
        {userData ? (
          <Container>
            <Text>{showDesription(userData)}</Text>
          </Container>
        ) : (
          <Container>
            <Text>Type weight and height and get the BMI.</Text>
          </Container>
        )}
      </Text>
    </Container>
  );
};

export default Description;
