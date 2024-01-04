"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import FirstSectionPublication from "../../FirstSection/FirstSectionPublication";
import SecondSectionPublication from "../../SecondSection/SecondSectionPublication";
import CarrouselProperty from "@/Components/CarrouselProperty/CarrouselProperty";
import { useEffect } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { getPostId } from "@/Redux/slices/theme/theme.actions";
import style from "./styles/index.module.css";
import Loader from "@/Components/Loader/Loader";
export default function Page() {
  const { id } = useParams();
  const url = useSearchParams();
  const dispatch = useDispatch();
  const path = usePathname();
  const propertyId = useSelector((state) => state.theme.post);

  const { propertyDetails } = propertyId || {};
  const { street, city, province, mapUbication } = propertyDetails || {};

  const upperStreet = street ? street.toUpperCase() : "";
  const hasCalleOrAv =
    upperStreet.includes("CALLE") || upperStreet.includes("AV");
  const location = street
    ? `${hasCalleOrAv ? "" : "Calle "}${street}`
    : "Información de la calle no disponible.";
  const partido =
    city && province
      ? `${city}, ${province}`
      : "Información de la ciudad/provincia no disponible.";

  useEffect(() => {
    dispatch(getPostId(id));
  }, []);

  return (
    <section className={style.containerPropertyViewPage}>
      {propertyId?.propertyDetails ? (
        <>
          <div className={style.contGeneralPropertyView}>
            <div className="flex flex-col gap-y-5">
              <Link
                href="/propertySearch"
                className="flex gap-x-2 w-[10%] cursor-pointer"
              >
                <Image
                  src="/Publications/vectorLeft.svg"
                  alt="vectorLeft"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
                <p className="font-bold">Volver</p>
              </Link>
              <div className={style.contTitlePublication}>
                <h1 className="text-4xl font-bold">
                  {propertyId && propertyId?.propertyDetails?.title}
                </h1>
                <div className={style.contLocation}>
                  <p className="text-gray-400">
                    {location} - {partido}
                  </p>
                  <div className="flex justify-center items-center w-10 h-10 rounded-lg border-2 border-gray-200 hover:bg-gray-100 cursor-pointer">
                    <Image
                      src="/Publications/shareButton.svg"
                      alt="shareButton"
                      width={20}
                      height={20}
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.contGeneralSections}>
              {propertyId?.propertyDetails && (
                <FirstSectionPublication
                  propertyId={propertyId}
                  partido={partido}
                  location={location}
                  mapUbication={mapUbication}
                />
              )}
              {propertyId?.propertyDetails && (
                <SecondSectionPublication propertyId={propertyId} />
              )}
            </div>
          </div>
          <div className="flex flex-col bg-[#00000008] w-full justify-center mt-20">
            <div className={style.containerCarrousel}>
              <CarrouselProperty propertyId={propertyId} />
            </div>
          </div>
        </>
      ) : <Loader />}
    </section>
  );
}
