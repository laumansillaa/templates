"use client";
import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado:", email);
  };

  return (
    <div className="flex w-[50%] flex-col justify-center gap-y-10">
      <div className="flex flex-col text-center gap-y-2">
        <h3 className="text-4xl font-bold">Enterate de nuestras novedades</h3>
        <p className="">
          Dejanos tu mail para enviarte mensualmente nuestras noticias
          relevantes.
        </p>
      </div>
      <form className="flex items-center relative" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow outline-none px-4 py-2 border border-gray-300 rounded-md h-16 text-xl"
        />
        <button
          type="submit"
          className="absolute right-3 px-8 py-3 bg-[#FCA640] text-sm text-white rounded-md hover:scale-[1.04]"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
