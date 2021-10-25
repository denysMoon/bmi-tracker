import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: none;
  height: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.color.secondary.main};
`;
