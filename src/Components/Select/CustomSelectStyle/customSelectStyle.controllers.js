import { useState } from "react";

export const customSelectStyleControllers = (
  selectButtonRef,
  selectOptionsRef,
  onChange,
  options,
  name
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  };

  const handleCloseToggleDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (optionValue) => {
    onChange({
      target: {
        name: name,
        value: optionValue.name,
      },
    });
    setIsOpen(false);
    selectButtonRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (isOpen) {
      switch (e.key) {
        case "Escape":
          setIsOpen(false);
          selectButtonRef.current.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (focusedIndex > 0) {
            setFocusedIndex(focusedIndex - 1);
            scrollOptionIntoView(focusedIndex - 1);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (focusedIndex < options.length - 1) {
            setFocusedIndex(focusedIndex + 1);
            scrollOptionIntoView(focusedIndex + 1);
          }
          break;
        case "Enter":
          if (focusedIndex !== -1) {
            handleOptionClick(options[focusedIndex].value);
          }
          break;
        default:
          break;
      }
    } else if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    }
  };

  const scrollOptionIntoView = (index) => {
    const optionElement =
      selectOptionsRef.current.querySelectorAll("li")[index];
    if (optionElement) {
      optionElement.scrollIntoView({
        block: "nearest",
      });
    }
  };

  return {
    isOpen,
    toggleDropdown,
    handleOptionClick,
    handleKeyDown,
    focusedIndex,
    handleCloseToggleDropdown,
  };
};
