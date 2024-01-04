import Link from "next/link";
import { useSelector } from "react-redux";
import CardProperty from "@/Components/Cards/CardProperty";
import NewsletterForm from "@/Components/NewsletterForm/NewsletterForm";
import Search from "@/Components/Search/Search";
import style from "./styles/index.module.css";
import Loader from "@/Components/Loader/Loader";
export default function Home() {
  const postState = useSelector((state) => state.theme.list);

  return (
    <section className="bg-cover bg-center">
      <header className={style.headerHome}>
        <div className="flex h-screen flex-col justify-center px-4 sm:px-0">
          <div className={style.contTitlesHome}>
            <h1 className={style.titlePublication}>
              Tu propiedad la encontrás aquí
            </h1>
            <p className={style.subtitlePublication}>
              Descubrí las propiedades destacadas de nuestro portal
            </p>
          </div>
          <Search fromHome={true} />
        </div>
      </header>
      <main className={style.contSimilarProps}>
        <div className="flex h-[20vh] flex-col items-center justify-evenly text-center">
          <h2 className={style.titleFeaturedProperty}>
            Propiedades destacadas
          </h2>
          <p>Conocé las propiedades en alquiler y venta disponibles.</p>
        </div>
        {!postState?.length ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "250px",
            }}
          >
            <Loader customHeight={"10vh"} />
          </div>
        ) : (
          <div className={style.contScrollCards}>
            {postState.slice(0, 6).map((property) => {
              return <CardProperty key={property.id} property={property} />;
            })}
          </div>
        )}

        <div className="flex w-full justify-center">
          <Link
            href="/propertySearch?fromHome=true"
            className={style.buttonMoreProperties}
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
