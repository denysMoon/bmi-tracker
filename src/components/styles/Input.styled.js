import styled from "styled-components";

export const Input = styled.input`
  max-width: 95px;
  height: 30px;
  margin-left: 5px;
  type: {
    ${(props) => props.type}
  }
  ::placeholder {
    ${(props) => props.placeholder}
  }
  value: {
    ${(props) => props.value}
  }
`;
