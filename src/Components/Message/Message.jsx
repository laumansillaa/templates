import style from "./styles/index.module.css";
export default function Message({ text, errorMessage }) {
  return (
    <label
      className={`${style.textMessage} 
  ${errorMessage === false && style.valueInvalid}
`}
    >
      {text}
    </label>
  );
}
