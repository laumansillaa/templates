'use client'
import { LabelForm } from '../LabelForm/LabelForm';
import { CustomInput } from './CustomInput';
import style from './styles/index.module.css'
export const CustomInputWithCurrencies = ({
  type = "text",
  labeltext,
  name,
  placeholder,
  value,
  maxLength,
  valid,
  onChange,
  styled
}) => {

  const customStyled = {
    borderRadius: '0px 8px 8px 0px',
    ...styled
  }

  return (
    <div className={style.conInput}>
      <LabelForm text={labeltext} />
      <div className={style.contItemSelect}>
        <div className={style.contCurrency}>
          <label className={style.currency}>$</label>
        </div>
        <CustomInput
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          validate={valid}
          onChange={onChange}
          customStyle={customStyled}
          required
        />
      </div>
    </div>
  );
};