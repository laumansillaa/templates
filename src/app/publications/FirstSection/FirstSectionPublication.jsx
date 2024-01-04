"use client";
import ImageGallery from "@/Components/ImageGallery/ImageGallery";
import { DATA_PUBLICATION_PLACE } from "@/Constants";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./styles/index.module.css";
import { useClientIsReady } from "@/hook";
import { useWindowWidth } from "@react-hook/window-size";
import SectionPrice from "../SectionPrice/SectionPrice";
import Availability from "../Availability/Availability";
import FormContactPublications from "@/Components/FormContactPublications/FormContactPublications";

export default function FirstSectionPublication({
  propertyId,
  partido,
  location,
  mapUbication,
}) {
  const [mapPosition, setMapPosition] = useState([-34.9214, -57.9544]);
  const [lightboxContent, setLightboxContent] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { clientIsReady } = useClientIsReady();
  const onlyWidth = useWindowWidth();

  const mainImage = propertyId?.propertyDetails?.mainImage;
  const multimedia = propertyId?.propertyDetails?.multimedia || [];
  const planos = propertyId?.propertyDetails?.plane || [];
  const recorridoVirtual = propertyId?.propertyDetails?.video || "";
  const images = mainImage ? [{ src: mainImage, alt: "Imagen Principal" }] : [];

  const lightboxImages = images.concat(
    multimedia.map((src, index) => ({ src, alt: `Imagen ${index + 1}` }))
  );

  const getValue = (key) => {
    return propertyId &&
      propertyId.propertyDetails[key] &&
      propertyId.propertyDetails[key] !== "0"
      ? propertyId.propertyDetails[key]
      : "--";
  };

  const handleOptionClick = (opcion) => {
    if (opcion === "Fotos") {
      setLightboxContent(lightboxImages);
    } else if (opcion === "Planos" && planos.length > 0) {
      setLightboxContent(planos.map((plan) => ({ src: plan, alt: "Plano" })));
    } else if (opcion === "Recorrido Virtual" && recorridoVirtual.length > 0) {
      try {
        const videoData = JSON.parse(recorridoVirtual[0]);
        setLightboxContent([
          {
            type: "video",
            src: videoData.url,
            alt: "Recorrido Virtual",
          },
        ]);
      } catch (error) {
        console.error(
          "Error al parsear los datos del recorrido virtual",
          error
        );
      }
    }
    setLightboxOpen(true);
  };

  const attributesCategories = [
    {
      category: "Atributos Generales",
      items: (propertyId && propertyId?.propertyDetails?.typesAmbients) || [],
    },
    {
      category: "Servicios",
      items: (propertyId && propertyId?.propertyDetails?.services) || [],
    },
  ];

  useEffect(() => {
    if (mapUbication && mapUbication.length === 2) {
      const [latitude, longitude] = mapUbication.map(Number);
      setMapPosition({ lat: latitude, lng: longitude });
    }
  }, [mapUbication]);

  const DynamicMapComponent = dynamic(
    () => import("../../../Components/MapComponent/MapComponent"),
    { ssr: false }
  );

  return (
    <div className={style.contGeneralFirstSection}>
      <div className={style.contImageGallery}>
        <ImageGallery
          images={images}
          lightboxImages={lightboxContent}
          lightboxOpen={lightboxOpen}
          setLightboxOpen={setLightboxOpen}
        />
      </div>
      <div className="w-[99%] flex flex-col gap-y-8">
        <div className="flex justify-center gap-x-10 items-center mt-8">
          <p
            onClick={() => handleOptionClick("Fotos")}
            className="text-xl cursor-pointer select-none hover:text-[#FCA640] hover:underline hover:underline-offset-4 hover:font-bold text-gray-400"
          >
            Fotos
          </p>
          {planos.length > 0 && (
            <p
              onClick={() => handleOptionClick("Planos")}
              className="text-xl cursor-pointer select-none hover:text-[#FCA640] hover:underline hover:underline-offset-4 hover:font-bold text-gray-400"
            >
              Planos
            </p>
          )}
          {recorridoVirtual && (
            <p
              onClick={() => handleOptionClick("Recorrido Virtual")}
              className="text-xl cursor-pointer select-none hover:text-[#FCA640] hover:underline hover:underline-offset-4 hover:font-bold text-gray-400"
            >
              Recorrido Virtual
            </p>
          )}
        </div>
        <div className={style.contGeneralAttributes}>
          {DATA_PUBLICATION_PLACE.map((data, index) => (
            <div className={style.contAttribute} key={index}>
              <p className="text-gray-500 text-sm">{data.text}</p>
              <div className="flex items-center gap-x-1">
                <Image
                  src={data.image}
                  alt={data.text}
                  width={30}
                  height={30}
                />
                <span className="font-bold">{getValue(data.key)}</span>
              </div>
            </div>
          ))}
        </div>
        {clientIsReady && onlyWidth < 966 && (
          <>
            <SectionPrice propertyId={propertyId} />
            <Availability propertyId={propertyId} />
            <FormContactPublications />
          </>
        )}
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-xl">Descripción</h3>
            <span className="text-sm leading-6">
              {propertyId && propertyId.propertyDetails.description}
            </span>
          </div>
          {attributesCategories.map((atributo) => (
            <div className="flex flex-col gap-y-3" key={atributo.category}>
              <h3 className="font-bold text-xl">{atributo.category}</h3>
              <div className="grid grid-cols-4 gap-4">
                {atributo.items.length > 0 ? (
                  atributo.items.map((item, index) => (
                    <p key={index} className="text-gray-400">
                      {item}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400">
                    No hay información disponible.
                  </p>
                )}
              </div>
              <hr className="my-4" />
            </div>
          ))}
          <div className="flex flex-col gap-y-3">
            <h3 className="font-bold text-xl">Ubicación en el Mapa</h3>
            <div className="flex gap-x-1">
              <p>{location}</p>
              <p>{partido}</p>
            </div>
            <DynamicMapComponent position={mapPosition} />
          </div>
        </div>
      </div>
    </div>
  );
}
