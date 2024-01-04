"use client";
import "./globals.css";
import { SearchBarProvider } from "@/Context/useSearchBar.context";
import Home from "./home/Home";
export default function Page() {

  return (
    <SearchBarProvider>
      <Home />
    </SearchBarProvider>
  );
}
