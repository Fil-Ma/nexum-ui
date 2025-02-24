import styled, { css } from "styled-components";
import { TColor, TSize, TVariant } from "./types";
import { Styles } from "styled-components/dist/types";

const ButtonBase = styled.button<{
  $color: TColor;
  $size: TSize;
  $variant: TVariant;
  $customStyles?: Styles<object>;
}>`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  border-radius: 0.375rem;
  min-width: 30px;
  border: none;

  font-size: ${(props) => buttonStyles["fontSize"][props.$size]};
  line-height: ${(props) => buttonStyles["lineHeight"][props.$size]};
  font-weight: ${(props) => buttonStyles["fontWeight"][props.$size]};
  padding-top: ${(props) => buttonStyles["paddingTop"][props.$size]};
  padding-bottom: ${(props) => buttonStyles["paddingBottom"][props.$size]};
  padding-left: ${(props) => buttonStyles["paddingLeft"][props.$size]};
  padding-right: ${(props) => buttonStyles["paddingRight"][props.$size]};

  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

export default ButtonBase;

const buttonStyles = {
  fontSize: {
    small: "0.75rem",
    medium: "0.875rem",
    large: "1rem",
  },
  lineHeight: {
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
  },
  fontWeight: {
    small: "500",
    medium: "600",
    large: "700",
  },
  paddingTop: {
    small: "0.5rem",
    medium: "0.625rem",
    large: "0.75rem",
  },
  paddingBottom: {
    small: "0.5rem",
    medium: "0.625rem",
    large: "0.75rem",
  },
  paddingLeft: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
  },
  paddingRight: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.25rem",
  },
};
