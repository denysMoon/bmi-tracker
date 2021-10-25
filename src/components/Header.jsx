import Navigation from "./Navigation";
import { Container } from "./styles/Container.styled";
import { HeaderStyled } from "./styles/Header.styled";
import { Wrapper } from "./styles/Wrapper.styled";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <Container>
          <Title />
          <Navigation />
        </Container>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
