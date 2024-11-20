import { forwardRef, useRef, useState } from "react";
import { InputBase, Label, InputDecoration, InputContainer } from "./InputBase";
import { IInputProps } from "./types";
import { mergeRefs } from "@utils/mergeRefs";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      name,
      label,
      variant = "outlined",
      onBlur,
      onFocus,
      onMouseOver,
      onMouseLeave,
      disableHoverShrink = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const shrinkLabel =
      isFocused ||
      (!disableHoverShrink && isHover) ||
      Boolean(inputRef.current?.value) ||
      Boolean(props.value);

    const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(event);
    };

    const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(event);
    };

    const onInputHover = (event: React.MouseEvent<HTMLInputElement>) => {
      setIsHover(true);
      if (onMouseOver) onMouseOver(event);
    };

    const onInputLeave = (event: React.MouseEvent<HTMLInputElement>) => {
      setIsHover(false);
      if (onMouseLeave) onMouseLeave(event);
    };

    return (
      <InputContainer
        $variant={variant}
        $showPlaceholder={!label || shrinkLabel}
      >
        <InputBase
          ref={mergeRefs(ref, inputRef)}
          id={name}
          {...props}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onMouseOver={onInputHover}
          onMouseLeave={onInputLeave}
        />
        <Label htmlFor={name} $shrink={shrinkLabel}>
          {label}
        </Label>
        <InputDecoration variant={variant} />
      </InputContainer>
    );
  }
);

export default Input;
