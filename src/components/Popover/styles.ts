import styled, { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

type ContainerProps = {
  $customStyles?: Styles<object>;
  $isVisible: boolean;
};

export const PopoverContainer = styled.div<ContainerProps>`
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;
