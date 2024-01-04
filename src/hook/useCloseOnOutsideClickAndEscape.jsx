'use client'
import { useEffect } from "react";

const useCloseOnOutsideClickAndEscape = (ref, openState, handleClose) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        handleClose(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [ref, openState, handleClose]);
};

export default useCloseOnOutsideClickAndEscape;
