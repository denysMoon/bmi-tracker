import { Container } from "./styles/Container.styled";
import { Link } from "./styles/Link.styled";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <RouterLink to="/">
        <Link>Main</Link>
      </RouterLink>
      <RouterLink to="/about">
        <Link>About BMI</Link>
      </RouterLink>
    </Container>
  );
};

export default Navigation;
