import { Container } from "./styles/Container.styled";
import { HeaderStyled } from "./styles/Header.styled";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Title />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
