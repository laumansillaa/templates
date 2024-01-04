// "use client";
import style from "./styles/alertMessage.module.css";
import Image from "next/image";
export const AlertMessage = ({}) => {
  return (
    <div className={style.contText}>
      {/* <Image src={'/alertMessage.svg'} alt="" width={20} height={20}/> */}
      <h3 className={style.textError}>
        Recuerde que los campos marcados con un * son obligatorios.
      </h3>
    </div>
  );
};
