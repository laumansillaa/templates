"use client";
import { SearchBarProvider } from "@/Context/useSearchBar.context";
import PropertySearch from "./PropertySearch";

export default function page() {
  return (
    <SearchBarProvider>
      <PropertySearch />
    </SearchBarProvider>
  );
}
