import { Container } from "./styles/Container.styled";
import { Link } from "./styles/Link.styled";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <RouterLink to="/" style={{ textDecoration: "none" }}>
        <Link>Main</Link>
      </RouterLink>
      <RouterLink to="/about" style={{ textDecoration: "none" }}>
        <Link>About BMI</Link>
      </RouterLink>
    </Container>
  );
};

export default Navigation;
