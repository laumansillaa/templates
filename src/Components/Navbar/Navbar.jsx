import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";

export default function NavBar({display }) {

  let customStyle = {
    display: display
  }

  return (
    <nav className="relative z-30 py-5 border-b-2 border-gray-200" style={customStyle}>
      <div className="max-container flexBetween padding-container">
        <Link href="/">
          <Image
            src="/Navbar/logoNavbar.svg"
            alt="logo"
            width={200}
            height={70}
            className="w-auto h-auto"
          />
        </Link>
        <ul className="hidden h-full gap-12 ss:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.key}
              className="regular-16 text-navbar-text flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold gap-x-3"
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
