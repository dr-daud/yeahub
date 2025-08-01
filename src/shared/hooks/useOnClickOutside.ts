import { useEffect, type RefObject } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  closeFn: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeFn();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, closeFn]);
};
