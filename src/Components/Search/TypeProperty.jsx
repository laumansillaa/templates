
import { useRef } from "react";
import style from "./styles/typeProperty.module.css";
import { useCloseOnOutsideClickAndEscape } from "@/hook";

export default function TypeProperty({ setTypeProp, setTypeOfProperty, open }) {
  const modalRef = useRef()
  const typeProps = [
    "Ver todo",
    "Monoambiente",
    "Departamento",
    "Casa",
    "Casa Quinta",
    "Ph",
    "Duplex",
    "Triplex",
    "Oficina",
    "Local comercial",
    "Cochera",
    "Galpon",
    "Deposito",
    "Lote / Terreno",
  ];

  const handleSelectTypeProp = async (e) => {
    setTypeProp(e.target.name);
    setTypeOfProperty(false);
  };

  useCloseOnOutsideClickAndEscape(modalRef, open, () => setTypeOfProperty(false));

  return (
    <div className={style.containerPropertyTypes} ref={modalRef}>
      <div className={style.contScrollPropertyTypes}>
        <div className={style.contListPropertyTypes}>
          {typeProps.map((e, index) => {
            return (
              <div
                key={e}
                className="h-6 gap-2 flex flex-row justify-start items-center px-4 py-3 border border-gray-200 rounded-lg mr-1 cursor-pointer hover:bg-[#fca7407e] active:bg-[#f0effb] transform hover:scale-[0.98] active:scale-[0.98] xs:ml-2.5 md:ml-2.5"
              >
                <a
                  value={e}
                  name={e}
                  onClick={handleSelectTypeProp}
                  className="no-underline flex-grow flex flex-row justify-start items-center text-[#000828] text-sm font-medium leading-5 whitespace-nowrap select-none"
                >
                  {e}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[32.5px] h-[4.4px] m-[0 0 0 88px] rounded bg-[#e7e7e7] xs:m-[0 25% 0 25%] xs:w-full md:m-[0 25% 0 25%] md:w-full"></div>
    </div>
  );
}
