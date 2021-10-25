import styled from "styled-components";

const Input = styled.input`
  margin: 10px;
  width: 150px;
  height: 36px;
  border-radius: 25px;
  font-size: 1.4rem;
  padding: 0 10px;

  type: {
    ${(props) => props.type}
  }

  ::placeholder {
    ${(props) => props.placeholder};
  }

  value: {
    ${(props) => props.value}
  }
`;

export default Input;
