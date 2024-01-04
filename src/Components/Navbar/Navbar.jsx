import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import style from './styles/index.module.css'
export default function NavBar({display }) {

  let customStyle = {
    display: display
  }

  return (
    <nav className={style.contNavbar} style={customStyle}>
      <div className={style.contAux}>
        <Link href="/">
          <Image
            src="/Navbar/logoNavbar.svg"
            alt="logo"
            width={200}
            height={70}
            className="w-auto h-auto"
          />
        </Link>
        <ul className={style.contItems}>
          {NAV_LINKS.map((link) => (
            <div
              key={link.key}
              className={style.link}
            >
              <Image
                src={link.image}
                alt={link.key}
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <p>{link.text}</p>
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
}
