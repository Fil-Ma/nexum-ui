import { ComputePopoverPosition, FinalPopoverPosition } from "./types";

export const getPopoverPosition: ComputePopoverPosition = (
  anchorRect,
  popoverPosition,
  params
) => {
  const [position, alignment] = popoverPosition.split("-");
  const { offset, width, height } = params;

  const styles: FinalPopoverPosition = {};

  const offsetX = offset?.x || 0;
  const offsetY = offset?.y || 0;

  // Calculate `top` or `bottom` based on vertical position
  if (position === "top") {
    styles.top = anchorRect.top - height - offsetY;
  } else if (position === "bottom") {
    styles.top = anchorRect.bottom + offsetY;
  }

  // Calculate `left` or `right` based on horizontal position
  if (position === "left") {
    styles.left = anchorRect.left - width - offsetX;
  } else if (position === "right") {
    styles.left = anchorRect.right + offsetX;
  }

  // Handle alignment for horizontal adjustments
  if (alignment === "left") {
    styles.left = anchorRect.right - width - offsetX;
  } else if (alignment === "right") {
    styles.left = anchorRect.left + offsetX;
  } else if (
    alignment === "center" &&
    (position === "top" || position === "bottom")
  ) {
    styles.left = anchorRect.left - width / 2 + anchorRect.width / 2;
  }

  // Handle alignment for vertical adjustments
  if (alignment === "top") {
    styles.top = anchorRect.bottom - height - offsetY;
  } else if (alignment === "bottom") {
    styles.top = anchorRect.top + offsetY;
  } else if (
    alignment === "center" &&
    (position === "left" || position === "right")
  ) {
    styles.top = anchorRect.top - height / 2 + anchorRect.height / 2;
  }

  return styles;
};
