import { LabelForm } from '../LabelForm/LabelForm';
import { CustomSelectStyle } from './CustomSelectStyle/CustomSelectStyle';
import style from './styles/customSelect.module.css'

export const CustomSelectWithLabelText = ({
  text = "",
  options,
  onChange,
  value,
  id,
  name,
  placeholder,
  isValid,
}) => {
  return (
    <div className={style.contSelect} >
      <LabelForm text={text} />
      <CustomSelectStyle
        options={options}
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        placeholder={placeholder}
        isValid={isValid}
      />
    </div>
  );
};
