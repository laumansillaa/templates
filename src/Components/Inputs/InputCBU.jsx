import { LabelForm } from "../LabelForm/LabelForm";
import style from "./styles/index.module.css";
export const InputFormCBU = ({
  type = "text",
  placeholder,
  name,
  labelText,
  value,
  handleChange,
  onBlurFunction,
  validateValue = "#e0def7",
  disabled = false,
}) => {
  return (
    <div className={style.conInput}>
      <div className={style.contText}>
        <LabelForm text={labelText} />
        <label className={style.textCounter}>{`${value.length} / 22`}</label>
      </div>
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
        validate={validateValue || null}
        disabled={disabled}
        required
      />
    </div>
  );
};
