"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/index.module.css";
export default function Footer() {
  return (
    <footer className={style.contFooter}>
      <div className={style.contItemsFooter}>
        <div className={style.primaryBoxFooter}>
          <Link
            className={style.contLogoFooter}
            href="/"
          >
            <Image
              src="/Navbar/logoNavbar.svg"
              alt="Logo Tu Inmobiliaria"
              width={230}
              height={230}
              className="w-auto h-auto"
            />
          </Link>

          <div className={style.containerFooterText}>
            <div>
              <h2 className="text-lg font-bold mb-4">VISITANOS</h2>
              <ul className={style.textFooter}>
                <li>Calle 4 N° 463 e/41 y 42</li>
                <li>La Plata - CP 1900</li>
                <li>Provincia de Bs.As</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">CONTACTO</h2>
              <ul className={style.textFooter}>
                <li className="flex gap-x-2">
                  <Image
                    src="/Footer/whatsappFooter.svg"
                    className="w-auto h-auto"
                    alt="whatsAppPhone"
                    width={20}
                    height={20}
                  />
                  221 654 5885
                </li>
                <li className="flex gap-x-2">
                  <Image
                    src="/Footer/whatsappFooter.svg"
                    className="w-auto h-auto"
                    alt="whatsAppPhoneVenta"
                    width={20}
                    height={20}
                  />
                  221 589 6985
                </li>
                <li className="flex gap-x-2">
                  <Image
                    src="/Footer/emailFooter.svg"
                    className="w-auto h-auto"
                    alt="email"
                    width={20}
                    height={20}
                  />
                  Info@flexy.com.ar
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.line} />

        <div className={style.containerCopyright}>
          <p className={style.footerCopyright}>
            ©2023 Tu inmobiliaria. Todos los derechos reservados. Diseñado por
            Flexy.
          </p>
          <div className={style.contSocialMediaFooter}>
            <a href="#">
              <Image
                src="/Footer/facebookFooter.svg"
                className="w-auto h-auto"
                alt="facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/Footer/instagramFooter.svg"
                className="w-auto h-auto"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/Footer/linkedinFooter.svg"
                className="w-auto h-auto"
                alt="linkedin"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
