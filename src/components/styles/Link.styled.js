import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  margin-left: 1.5rem;
  cursor: pointer;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
