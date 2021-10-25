import { useState } from "react";
import TitleStyled from "./styles/Title.styled.js";

const Title = () => {
  const [color, setColor] = useState(false);

  return (
    <TitleStyled
      onMouseEnter={() => setColor(true)}
      onMouseLeave={() => setColor(false)}
      color={color}
    >
      BMI tracker
    </TitleStyled>
  );
};

export default Title;
