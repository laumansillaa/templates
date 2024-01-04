"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useGetListPost } from "@/Redux/useActions/useGetListPost";

const SearchBarContext = createContext();

export function SearchBarProvider({ children }) {
  const searchParams = useSearchParams();
  const fromHome = searchParams?.get("fromHome");

  const [tipoOperacion, setTipoOperacion] = useState("venta");
  const [hasUsedSearch, setHasUsedSearch] = useState(false);
  const [location, setLocation] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  const typeProperty = useSelector((state) => state.theme.list);

  let filteredProperties;

  useGetListPost()

  if (fromHome && !hasUsedSearch) {
    filteredProperties = typeProperty;
  } else if (typeProperty && typeProperty.typeProp === "Ver todo") {
    filteredProperties = typeProperty.filter(
      (property) =>
        property.type === typeProperty.tipoOperacion &&
        (!typeProperty.location ||
          property.propertyDetails.state === typeProperty.location ||
          property.propertyDetails.city === typeProperty.location)
    );
  } else if (typeProperty) {
    filteredProperties = typeProperty.filter(
      (property) => property.type === tipoOperacion
    );
  }

  const handleSearch = () => {
    setHasUsedSearch(true);
    setCurrentPage(1);
  };

  const handleInputBuscador = function (e) {
    if (e.target.value === "") {
      setLocation("");
    }
    setLocation(e.target.value);
  };

  return (
    <SearchBarContext.Provider
      value={{
        filteredProperties,
        handleSearch,
        currentPage,
        setCurrentPage,
        tipoOperacion,
        setTipoOperacion,
        handleInputBuscador,
        location,
        setLocation
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
}

export function useSearchBarContext() {
  return useContext(SearchBarContext);
}
