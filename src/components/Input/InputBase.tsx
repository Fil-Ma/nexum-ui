import styled from "styled-components";
import { TVariant } from "./types";

const placeholderColor = (color: string) => `
  input::placeholder {
    color: ${color};
  }

  input::-webkit-input-placeholder {
    /* Chrome, Safari, Opera */
    color: ${color};
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    color: ${color};
  }
  input:-ms-input-placeholder {
    /* IE 10+ */
    color: ${color};
  }
  input::-ms-input-placeholder {
    /* Edge */
    color: ${color};
  }`;

export const InputContainer = styled.div<{
  $variant: TVariant;
  $showPlaceholder: boolean;
  $fullWidth: boolean;
  $margin: string;
}>`
  position: relative;
  font-size: 1rem;
  margin: ${(props) => props.$margin};
  width: ${(props) => (props.$fullWidth ? "100%" : "min-content")};
  background: inherit;
  border-radius: 6px;

  ${(props) => {
    const { $variant, theme } = props;

    if ($variant === "filled") {
      return `
        padding: 20px 12px 12px;
        background: ${theme.colors.neutral[200]};

        &:focus-within {
          background: ${theme.colors.primary[100]};
        }
        input {
          padding: 4px;
        }
      `;
    } else if ($variant === "outlined") {
      return `
        padding: 8px 12px;
        border: 1px solid ${theme.colors.neutral[600]};

        &:focus-within {
          border-color: ${theme.colors.primary[300]};
          box-shadow: 0 0 4px ${theme.colors.primary[300]};
        }

        &:focus-within .outline {
          border-color: ${theme.colors.primary[200]};
        }
        input {
          padding: 8px;
        }
        label {
          padding-inline: 8px;
        }
      `;
    }
  }}

  input:focus ~ .underline {
    transform: scaleX(1);
  }

  ${(props) =>
    placeholderColor(
      props.$showPlaceholder ? props.theme.colors.neutral[700] : "transparent"
    )}
`;

export const InputBase = styled.input`
  color: ${(props) => props.theme.colors.neutral[900]};
  width: 100%;
  min-width: 20ch;
  box-sizing: border-box;
  border-radius: 2px;
  border: none;
  font-size: 1rem;
  line-height: 20px;
  outline: none;
  background: transparent;
  transition:
    border-color 0.2s,
    background-color 0.2s;
`;

const BaseLabel = styled.label`
  position: absolute;
  color: ${(props) => props.theme.colors.neutral[700]};
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease-out;
`;

export const FilledLabel = styled(BaseLabel)<{ $shrink: boolean }>`
  left: 16px;
  top: 20px;
  ${(props) =>
    props.$shrink &&
    `
        top: 0;
        left: 4px;
        transform: scale(0.7);
        padding: 0;

        input:focus-within + & {
          color: ${props.theme.colors.primary[600]};
        }
    `}
`;

export const OutlinedLabel = styled(BaseLabel)<{ $shrink: boolean }>`
  top: 16px;
  left: 12px;
  ${(props) =>
    props.$shrink &&
    `
        top: -10px;
        left: 0;
        z-index: 10;
        transform: scale(0.7);
        background-color: ${props.theme.colors.neutral[100]};

        input:focus-within + & {
          color: ${props.theme.colors.primary[600]};
        }
    `}
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary[600]};
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
`;

const Outline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  border-radius: 4px;
  pointer-events: none;
  transition: border-color 0.2s ease-in-out;
`;

export const InputDecoration = ({ variant }: { variant: TVariant }) => {
  if (variant === "filled") {
    return <Underline className="underline" />;
  } else {
    return <Outline className="outline" />;
  }
};
