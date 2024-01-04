"use client";

import FormContactPublications from "@/Components/FormContactPublications/FormContactPublications";
import ImageGallery from "@/Components/ImageGallery/ImageGallery";
import { modifyValueAmount } from "@/utils/functions";
import Image from "next/image";
import { useState } from "react";
import style from "./styles/index.module.css";
import SectionPrice from "../SectionPrice/SectionPrice";
import { useClientIsReady } from "@/hook";
import { useWindowWidth } from "@react-hook/window-size";
import Availability from "../Availability/Availability";
export default function SecondSectionPublication({ propertyId }) {
  const { clientIsReady } = useClientIsReady();
  const onlyWidth = useWindowWidth();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const multimedia = propertyId?.propertyDetails?.multimedia || [];

  const imagesToShow = multimedia.slice(0, 2).map((src, index) => ({
    src,
    alt: `Imagen ${index + 1}`,
  }));

  return (
    <>
      {clientIsReady && onlyWidth > 966 && (
        <div className={style.contGeneralSecondSection}>
          <div className={style.contBoxGallery}>
            <ImageGallery
              images={imagesToShow}
              lightboxImages={multimedia.map((src, index) => ({
                src,
                alt: `Imagen ${index + 1}`,
              }))}
              setLightboxOpen={setLightboxOpen}
              lightboxOpen={lightboxOpen}
            />
          </div>
          <SectionPrice propertyId={propertyId} />
          <Availability propertyId={propertyId} />
          <FormContactPublications />
        </div>
      )}
    </>
  );
}
