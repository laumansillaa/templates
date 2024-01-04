"use client";
import { useSearchBarContext } from "@/Context/useSearchBar.context";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { actionSetLocation } from "../Redux/Actions/actionLocation";
import style from '../Search/styles/index.module.css'
export default function AutoComplete() {
  const { handleInputBuscador, setLocation, location } = useSearchBarContext();
  const autoCompleteRef = useRef();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [mapsLoaded, setMapsLoaded] = useState(false);

  useEffect(() => {
    setMapsLoaded(true);
    initializeAutocomplete();
  }, [location]);

  const initializeAutocomplete = () => {
    if (typeof window === 'undefined' ||!mapsLoaded || !inputRef.current instanceof HTMLInputElement) {
      return;
    }

    if (!window.google || !window.google.maps) {
      console.error("Google Maps library is not loaded.");
      return;
    }

    const options = {
      componentRestrictions: { country: "ar" },
      fields: ["place_id", "name", "geometry"],
      types: ["locality", "sublocality"],
    };

    console.log("Google Maps library is loaded.", options);

    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", () => {
      const place = autoCompleteRef.current.getPlace();
      if (place?.name) {
        setLocation(place.name);
      }
    });
  };


  return (
    <div className={style.contItemFilter}>
      <div className={style.textFilter}>
        Ubicación
      </div>
      <input
        className="w-full h-5 text-black font-semibold text-lg leading-6 placeholder-opacity-50bg-white focus:outline-none focus:border-none focus:ring-0 placeholder-black 
            sm:h-full"
        placeholder="Introduce una ubicación"
        value={location}
        onChange={(e) => handleInputBuscador(e)}
        ref={inputRef}
      />
    </div>
  );
}
