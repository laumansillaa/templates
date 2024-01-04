import style from './styles/index.module.css'
export const CustomInput = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  max,
  min,
  validate = "#e0def7",
  disabled = false,
  customStyle
}) => {

  let custom = {
    ...customStyle
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
      disabled={disabled}
      max={max || null}
      min={min || null}
      required
      className={style.input}
      style={custom}
    />
  );
};