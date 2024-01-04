import { useEffect } from "react";

export const useHandlePositionBottom = (
  isOpen,
  selectOptionsRef,
  selectButtonRef
) => {
  useEffect(() => {
    if (isOpen) {
      selectOptionsRef.current.focus();
      const selectButtonRect = selectButtonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const spaceBelow = windowHeight - selectButtonRect.bottom;
      const spaceAbove = selectButtonRect.top;

      const optionsHeight = selectOptionsRef.current.scrollHeight;

      if (spaceBelow < optionsHeight && spaceAbove > spaceBelow) {
        selectOptionsRef.current.style.bottom = "100%";
        selectOptionsRef.current.style.top = "initial";
      } else {
        selectOptionsRef.current.style.top = "100%";
        selectOptionsRef.current.style.bottom = "initial";
      }
    }
  }, [isOpen]);
};
