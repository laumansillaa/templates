import style from './styles/labelForm.module.css'
export const LabelForm = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};
