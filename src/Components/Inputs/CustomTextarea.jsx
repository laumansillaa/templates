import { LabelForm } from "../LabelForm/LabelForm";
import Message from "../Message/Message";
import style from "./styles/index.module.css";

export const calculateRows = (onlyWidth) => (onlyWidth < 480 ? 4 : 8);

export const CustomTextarea = ({
  placeholder,
  name,
  labelText,
  value,
  handleChange,
  cols,
  rows,
  max,
  min,
  isValid = "#e0def7",
  disabled = false,
  errorMessage,
}) => {
  return (
    <div className={style.conInput}>
      <div
        style={{
          width: "-webkit-fill-available",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LabelForm text={labelText} />
        <Message text={`${value.length}/2000`} errorMessage={errorMessage} />
      </div>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        className={`${style.inputTextArea} 
            ${isValid === false && style.valueInvalid}
          `}
        disabled={disabled}
        cols={cols}
        rows={rows}
        max={max || null}
        min={min || null}
        required
      />
    </div>
  );
};
