"use client";
import React from "react";
import styles from "./styles/index.module.css"; // Importa el archivo de estilos CSS Modules
import { LabelForm } from "../LabelForm/LabelForm";
// import { DescriptionTextInput } from "../DescriptionTextInput/DescriptionTextInput";

const CustomInputForm = ({
  type = "text",
  placeholder,
  name,
  labelText,
  value,
  handleChange,
  max,
  min,
  isValid,
  disabled = false,
  styled = {},
}) => {
  const customStyled = {
    width: "-webkit-fill-available",
    ...styled,
  };

  return (
    <div className={styles.conInput}>
      <LabelForm text={labelText} />
      <div className={styles.aux}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          max={max || null}
          min={min || null}
          required
          style={customStyled}
          className={`${styles.input} 
            ${isValid === false && styles.valueInvalid}
          `}
        />
      </div>
    </div>
  );
};

export default CustomInputForm;
