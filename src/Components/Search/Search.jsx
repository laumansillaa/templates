"use client";
import Image from "next/image";
import React, { useState } from "react";
import TypeProperty from "./TypeProperty";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import AutoComplete from "../AutoComplete/AutoComplete";
import {
  getSearchResult,
} from "@/Redux/slices/theme/theme.actions";
import { useSearchBarContext } from "@/Context/useSearchBar.context";
import style from "./styles/index.module.css";
// import { actionSetPropertySearch } from '@/app/Redux/Actions/actionProperty';
// import { actionSetLocation } from '@/app/Redux/Actions/actionLocation';

export default function Search({ fromHome, onSearch }) {
  const { setTipoOperacion, tipoOperacion, location } = useSearchBarContext();

  const [typeProp, setTypeProp] = useState("Ver todo");
  const [typeOfProperty, setTypeOfProperty] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const mostrarTipodelpropiedad = function (e) {
    setTypeOfProperty(!typeOfProperty);
  };

  const sendListTypeProperty = () => {
    // if (fromHome) {
    //   router.push("/propertySearch");
    //   dispatch(actionSetPropertySearch({ typeProp: typeProp, tipoOperacion: tipoOperacion, location: location }));
    // } else {
    //   dispatch(actionSetPropertySearch({ typeProp: typeProp, tipoOperacion: tipoOperacion, location: location }));
    //   if (onSearch) {
    //     onSearch();
    //   }
    // }
    dispatch(
      getSearchResult({
        id: "ad57a8d0-53c5-11ee-9ef5-1b0a254419f3",
        location: "La Plata",
      })
    );
  };

  return (
    <div className={style.containerSearch}>
      <div className={style.contItems}>
        <button
          className={`${style.item}
          ${tipoOperacion === "alquiler" ? style.active : style.disabled}`}
          onClick={() => setTipoOperacion("alquiler")}
        >
          Alquilar
        </button>

        <button
          className={`${style.item}
          ${tipoOperacion === "venta" ? style.active : style.disabled}`}
          onClick={() => setTipoOperacion("venta")}
        >
          Comprar
        </button>
      </div>

      <div className={style.contFilterSearch}>
        <AutoComplete />

        <Image
          src="https://file.rendit.io/n/cw7Ur00TGqZRLiqkOnkp.svg"
          alt="separador"
          width={50}
          height={50}
          className={style.lineSeparator}
        />

        <div
          className={style.contItemFilter}
          onClick={(e) => mostrarTipodelpropiedad(e)}
        >
          <div className={style.contTitleItem}>
            <label className={style.textFilter}>Tipo de Propiedad</label>
            <div className="h-auto w-auto flex flex-col justify-start p-1 bg-f0effb rounded-full cursor-pointer transform transition-transform hover:scale-105 active:scale-90">
              <Image
                src="/Home/vectorDown.svg"
                alt="vectorDown"
                width={20}
                height={20}
                className="pointer-events-none w-auto h-auto"
              />
            </div>
          </div>
          <div className="text-black font-bold text-lg leading-7 whitespace-nowrap overflow-hidden">
            {typeProp}
          </div>
          {typeOfProperty && (
            <TypeProperty
              setTypeProp={setTypeProp}
              setTypeOfProperty={setTypeOfProperty}
              open={typeOfProperty}
            />
          )}
        </div>

        <Image
          src="https://file.rendit.io/n/cw7Ur00TGqZRLiqkOnkp.svg"
          alt="separador"
          width={50}
          height={50}
          className={style.lineSeparator}
        />

        <div className={style.buttonSubmitted} onClick={sendListTypeProperty}>
          <label className={style.textSearch}>Buscar</label>
          <Image
            src="/Home/lupa.svg"
            alt="lupa"
            width={20}
            height={20}
            className={style.iconSearch}
          />
        </div>
      </div>
    </div>
  );
}
