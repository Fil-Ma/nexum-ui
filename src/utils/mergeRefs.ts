import { MutableRefObject, Ref, useEffect } from "react";

export function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object") {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
  };
}
