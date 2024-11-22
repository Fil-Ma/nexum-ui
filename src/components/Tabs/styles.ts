import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 6px 12px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: ${(props) => (props.isActive ? "#6200ee" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border-bottom: ${(props) => (props.isActive ? "4px solid #6200ee" : "none")};

  ${(props) =>
    !props.isActive &&
    `
    &:hover {
    background-color: #e0e0e0;
  }
    `}
`;

export const TabPanel = styled.div`
  padding: 16px;
  display: ${(props) => (props.hidden ? "none" : "block")};
  background: #f9f9f9;
  border-top: 1px solid #ddd;
`;
