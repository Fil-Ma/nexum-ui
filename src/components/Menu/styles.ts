import styled from "styled-components";

export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const MenuItem = styled.li<{ $clickable: boolean }>`
  padding: 4px 8px;
  background-color: inherit;
  transition: background-color 0.2s ease-in;

  ${(props) =>
    props.$clickable &&
    `
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.05);
    }
  `}
`;
