import { Container } from "./styles/Container.styled";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <RouterLink to="/" style={{ textDecoration: "none" }}>
        Main
      </RouterLink>
      <RouterLink to="/about" style={{ textDecoration: "none" }}>
        About BMI
      </RouterLink>
    </Container>
  );
};

export default Navigation;
