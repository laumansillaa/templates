import ItemProgresDesktop from "./ItemProgresDesktop";
import { dataSteps } from "./dataSteps";
import style from './styles/index.module.css'

const ProgresDesktop = ({ type }) => {

  return (
    <div className={style.contProgresDesktop}>
      {dataSteps[type].map((e) => (
        <ItemProgresDesktop key={e.text} step={e.step} text={e.text} type={type} />
      ))}
    </div>
  );
};

export default ProgresDesktop;
