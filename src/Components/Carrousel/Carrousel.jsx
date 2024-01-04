"use client";
import { useState } from "react";
import style from "./styles/index.module.css";
import CardProperty from "../Cards/CardProperty";
import Image from "next/image";

export default function Carrousel({ data, widthCard }) {
  const [startIdx, setStartIdx] = useState(0);
  const cardsPerPage = 3;
  const gap = 32;

  const handleNextClick = () => {
    if (startIdx + cardsPerPage < data.length) {
      setStartIdx(startIdx + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - 1);
    }
  };

  return (
    <div className={style.contCarrousel}>
      <div
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(-${startIdx * (widthCard + gap)}px)`,
        }}
        className={style.slideCarrousel}
      >
        {data.map((e, index) => (
          <CardProperty property={e} key={`${index + e.id}`} />
        ))}
      </div>
      <Image
        className={style.FlechaLeft}
        src={"/arrow/arrowCircleLeft.svg"}
        width={40}
        height={40}
        alt="img"
        onClick={handlePrevClick}
      />
      <Image
        className={style.FlechaRight}
        src={"/arrow/arrowCircleRight.svg"}
        width={40}
        height={40}
        alt="img"
        onClick={handleNextClick}
      />
    </div>
  );
}
