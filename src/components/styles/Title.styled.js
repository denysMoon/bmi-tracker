import styled from "styled-components";

const TitleStyled = styled.h1`
  color: ${(props) => (props.color === true ? "red" : "none")};
  padding: 10px;
`;

export default TitleStyled;
