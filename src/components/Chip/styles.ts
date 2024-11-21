import styled, { css } from "styled-components";
import { TChipSize, TChipVariant } from "./types";

const sizeStyles = {
  small: css`
    font-size: 12px;
    line-height: 14px;
    padding: 4px 8px;
  `,
  medium: css`
    font-size: 14px;
    line-height: 18px;
    padding: 6px 12px;
  `,
};

export const ChipContainer = styled.div<{
  $color: string;
  $size: TChipSize;
  $variant: TChipVariant;
  $rounded: boolean;
  onClick?: VoidFunction;
}>`
  display: inline-flex;
  align-items: center;
  border-radius: ${(props) => (props.$rounded ? "50px" : "16px")};

  transition:
    background-color 0.3s,
    color 0.3s;

  ${(props) => sizeStyles[props.$size]}
  ${(props) =>
    ({
      filled: css`
        background-color: ${props.$color};
        color: #fff;
        border: none;
      `,
      outlined: css`
        background-color: transparent;
        color: ${props.$color};
        border: 1px solid ${props.$color};
      `,
    })[props.$variant]}

  ${(props) =>
    props?.onClick &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${props.$variant === "filled"
          ? `${props.$color}cc`
          : `${props.$color}1a`};
      }
    `}
`;

export const ChipLabel = styled.span`
  margin: 0;
`;

export const ChipIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
