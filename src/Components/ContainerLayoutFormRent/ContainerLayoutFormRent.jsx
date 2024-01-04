import { useWindowWidth } from "@react-hook/window-size";
// import { Progres } from "../../Components/Progres";
import style from './styles/index.module.css'

// import { deleteStorageCreateAlquiler } from "@/Components/utils/deleteStorage";
// import { TopNav } from "../../Components/TopNav";
import { useDispatch, useSelector } from "react-redux";
// import { clearForm } from "@/redux/actions";
import { useClientIsReady } from "@/hook";
import ProgresDesktop from "../Progres/ProgresDesktop";
import TopNav from "../TopNav/TopNav";
const ContainerLayoutFormRent = ({
  titulo,
  page,
  children,
  progressText = { text1: "Información", text2: "Imágenes", text3: "Extras" },
  type
}) => {
  const onlyWidth = useWindowWidth();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const { clientIsReady } = useClientIsReady();

  const clearStorageData = () => {
    deleteStorageCreateAlquiler();
    if (Object.keys(form).length) {
      dispatch(clearForm());
    }
  };

  return (
    <div className={style.containerCustomForm}>
      <TopNav sizeProp={onlyWidth} functionDeleteStorage={clearStorageData} />
      <div className={style.contForm}>
        <div className={style.contTitle}>
          <label className={style.title}>{titulo}</label>
        </div>
        {clientIsReady &&
          (onlyWidth > 480 ? (
            <ProgresDesktop type={type} />
          ) : (
            <Progres page={page} {...progressText} />
          ))}
        <div className={style.line}></div>
        {children}
      </div>
    </div>
  );
};

export default ContainerLayoutFormRent