import { LabelForm } from "../LabelForm/LabelForm";
import style from './styles/index.module.css'
export const CustomInputCBU = ({
  type = "text",
  placeholder,
  name,
  labelText,
  value,
  handleChange,
  max,
  min,
  // valid,
  disabled = false,
  styled = {},
}) => {

  
  const customStyled = {
    width: "-webkit-fill-available",
    ...styled,
  };

  return (
    <div className={style.conInput}>
      <div className={style.conText}>
        <LabelForm text={labelText} />
        <h4 className={style.TextCounter}>{`${value.length} / 22`}</h4>
      </div>
      <div className={style.aux}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
          // validate={valid}
          disabled={disabled}
          max={max || null}
          min={min || null}
          required
          style={customStyled}
          className={style.input}
        />
        {/* {description && <DescriptionTextInput description={description} />} */}
      </div>
    </div>
  );
};
