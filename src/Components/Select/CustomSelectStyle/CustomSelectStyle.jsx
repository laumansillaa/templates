'use client'
import { useRef } from "react";
import { useCustomSelectStyleControllers } from "./customSelectStyle.controllers";
import { useHandlePositionBottom } from "./useHandlePositionBottom";
import iconArrow from "../assets/inputArrow.svg";
import { useCloseOnOutsideClickAndEscape } from "@/hook";
import style from '../styles/customSelect.module.css'
import Image from "next/image";

export const CustomSelectStyle = ({
  options,
  onChange,
  value,
  id,
  name,
  placeholder = "Seleccione una opción",
  isValid,
}) => {

  const selectButtonRef = useRef(null);
  const selectOptionsRef = useRef(null);

  const {
    isOpen,
    toggleDropdown,
    handleOptionClick,
    handleKeyDown,
    focusedIndex,
    handleCloseToggleDropdown,
  } = useCustomSelectStyleControllers(
    selectButtonRef,
    selectOptionsRef,
    onChange,
    options,
    name
  );

  useCloseOnOutsideClickAndEscape(
    selectButtonRef,
    isOpen,
    handleCloseToggleDropdown
  );

  useHandlePositionBottom(isOpen, selectOptionsRef, selectButtonRef);

  return (
    <div className={style.contSelect}>
      <div
        className={style.selectButton}
        onClick={toggleDropdown}
        id={id}
        aria-expanded={isOpen}
        onKeyDown={handleKeyDown}
        ref={selectButtonRef}
        valid={isValid}
      >
        {value || <p className={style.placeholderValue}>{placeholder}</p>}
        <Image src={iconArrow} alt="" />
        {isOpen && (
          <ul
            className={style.selectOptions}
            onKeyDown={handleKeyDown}
            tabIndex="0"
            ref={selectOptionsRef}
          >
            {options.map((option, index) => (
              <li
                className={style.options}
                key={option.name}
                onClick={() => handleOptionClick(option)}
                focused={focusedIndex === index}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
