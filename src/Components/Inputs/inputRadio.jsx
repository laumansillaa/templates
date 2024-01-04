import style from './styles/index.module.css'
export const InputRadio = ({
  inputId,
  labelText,
  name,
  value,
  checked,
  onChangeAction,
  isReservation = false,
}) => {
  return (
    <div className={style.conInput}>
      <label className={style.textInputRadio}>{labelText}</label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChangeAction(e)}
        onClick={isReservation ? onChangeAction : null}
      />
    </div>
  );
};