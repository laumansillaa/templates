import style from './styles/index.module.css'
import { LabelForm } from "../LabelForm/LabelForm";

export const InputForm = ({
  type = "text",
  placeholder,
  name,
  labelText,
  value,
  handleChange,
  onBlurFunction,
  max,
  min,
  validateValue,
  disabled = false,
}) => {
  return (
    <div className={style.conInput}>
      <LabelForm text={labelText} />
      <input 
        className={style.input}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        onBlur={onBlurFunction}
        validate={validateValue || "#e0def7"}
        disabled={disabled}
        max={max || null}
        min={min || null}
        required
      />
    </div>
  );
};
