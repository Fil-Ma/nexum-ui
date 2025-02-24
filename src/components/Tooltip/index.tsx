import { useState } from "react";
import { TooltipContainer, TooltipContent } from "./styles";
import { ITooltipProps } from "./types";

const Tooltip = ({ children, content, position = "top" }: ITooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipContainer
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <TooltipContent $position={position}>{content}</TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
