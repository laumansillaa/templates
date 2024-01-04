import Link from "next/link";
import { useSelector } from "react-redux";
import CardProperty from "@/Components/Cards/CardProperty";
import NewsletterForm from "@/Components/NewsletterForm/NewsletterForm";
import Search from "@/Components/Search/Search";
import style from "./styles/index.module.css";
export default function Home() {
  const postState = useSelector((state) => state.theme.list);

  return (
    <section className="bg-cover bg-center">
      <header className={style.headerHome}>
        <div className="flex h-screen flex-col justify-center px-4 sm:px-0">
          <div className="mb-6 text-center">
            <h1 className="mb-4 text-4xl font-bold text-home-title-h1 se:text-2xl xs:text-5xl md:text-6xl">
              Tu propiedad la encontrás aquí
            </h1>
            <p className="text-xl text-home-text-p se:text-sm ss:text-lg md:text-2xl">
              Descubrí las propiedades destacadas de nuestro portal
            </p>
          </div>
          <Search fromHome={true} />
        </div>
      </header>
      <main className={style.contSimilarProps}>
        <div className="flex h-[20vh] flex-col items-center justify-evenly text-center">
          <h2 className="text-5xl font-bold">Propiedades destacadas</h2>
          <p>Conocé las propiedades en alquiler y venta disponibles.</p>
        </div>
        <div className={style.contScrollCards}>
          {postState.slice(0, 6).map((property) => {
            return <CardProperty key={property.id} property={property} />;
          })}
        </div>
        <div className="flex w-full justify-center">
          <Link
            href="/propertySearch?fromHome=true"
            className=" flex h-10 w-60 items-center justify-center rounded-md bg-[#FCA640] text-sm text-white hover:scale-[1.01]"
          >
            Ver más propiedades
          </Link>
        </div>
        {/* <div className="mt-10 flex h-[30vh] w-full items-center justify-center bg-[#00000014]">
          <NewsletterForm />
        </div> */}
      </main>
    </section>
  );
}
