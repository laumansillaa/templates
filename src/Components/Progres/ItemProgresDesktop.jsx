import { usePathname } from "next/navigation";
import style from "./styles/index.module.css";
const ItemProgresDesktop = ({ step, text, type }) => {
  const searchParams = usePathname();

  // El includes representa el paso actual, por ejemplo: /rent/1, etc
  let active = searchParams.includes(`${type}/${step}`);
  return (
    <div className={`${style.containerItemProgres}`}>
      <div className={`${style.circleProgres} ${active && style.active}`}>
        {step}
      </div>
      <p className={`${style.text}`}>{text}</p>
    </div>
  );
};

export default ItemProgresDesktop;
