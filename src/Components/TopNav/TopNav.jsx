import Image from "next/image";
import style from "./styles/TopNav.module.css";
const TopNav = () => {
  return (
    <div className={style.contTopNav}>
      <div className={style.contItemsNavBar}>
        <div className={style.contNext}>
          <Image src="/arrowLeft.svg" alt="img" width={20} height={20} />
          <label className={style.text}>Volver</label>
        </div>
        <Image
          src="/Navbar/logoNavbar.svg"
          alt="img"
          width={200}
          height={70}
          className={style.logoNavBar}
        />
      </div>
    </div>
  );
};

export default TopNav;
