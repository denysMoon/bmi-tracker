import Form from "./Form";
import { Container } from "./styles/Container.styled";
import UserData from "./UserData";

const Main = () => {
  return (
    <Container>
      <Form />
      <UserData />
    </Container>
  );
};

export default Main;
