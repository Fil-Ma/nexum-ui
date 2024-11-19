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
  variant: TVariant;
  showPlaceholder: boolean;
}>`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin: 20px 0;
  width: 100%;
  background: inherit;
  border-radius: 4px;
  padding: 8px 12px;

  ${(props) => {
    const { variant } = props;

    if (variant === "filled") {
      return `
        :focus-within {
          background: #e8eaf6; /* Slightly darker on focus */
        }

        input {
          padding: 8px 0 4px;
        }
      `;
    } else if (variant === "outlined") {
      return `
        border: 1px solid #e0e0e0;

        :focus-within {
          border-color: #6200ee;
          box-shadow: 0 0 4px rgba(98, 0, 238, 0.3);
        }

        :focus-within .outline {
          border-color: #6200ee;
        }
      `;
    }
  }}

  input:focus ~ .underline {
    transform: scaleX(1);
  }

  ${(props) =>
    placeholderColor(props.showPlaceholder ? "#9E9E9E" : "transparent")}
`;

export const InputBase = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  outline: none;
  background: transparent;
  transition:
    border-color 0.2s,
    background-color 0.2s;
  padding: 8px;
`;

export const Label = styled.label<{ shrink: boolean }>`
  position: absolute;
  left: 12px;
  top: 12px;
  color: #9e9e9e;
  font-size: 1rem;
  pointer-events: none;
  transition: 0.2s ease-in-out;
  ${(props) =>
    props.shrink &&
    `
    top: -10px;
    font-size: 12px;
    color: #6200ee;
    `}
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #6200ee;
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
