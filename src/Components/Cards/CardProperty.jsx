"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { modifyValueAmount } from "@/utils/functions";
import { actionSetPropertyId } from "@/Redux/slices/theme/theme.slice";
// import { actionSetPropertyId } from "../Redux/Actions/actionProperty";
import style from "./styles/index.module.css";
export default function CardProperty({ property }) {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(modifyValueAmount(property.amount.toString()));
  }, []);

  const handleClickToPublication = () => {
    router.push(`/publications/${property.type}/${property.id}`);
    dispatch(actionSetPropertyId(property));
  };

  return (
    <div onClick={handleClickToPublication} className={style.contGeneralCard}>
      <div className={style.contImageCard}>
        <div
          className={`${style.cardItem} ${
            property?.type === "venta" ? style.venta : style.alquiler
          }`}
        >
          <p className="text-white text-sm leading-5 px-2 m-0 tracking-wider">
            {property?.type[0].toUpperCase() + property?.type.slice(1)}
          </p>
        </div>
        <Image
          src={property?.propertyDetails.mainImage}
          alt={property?.propertyDetails.mainImage}
          width={350}
          height={250}
          className={style.mainImage}
        />
      </div>
      <div className={style.contInfoCard}>
        <div className={style.contAuxInfoCard}>
          <div className="w-full h-32 space-y-1 flex flex-col justify-center items-start px-3 gap-1">
            <div className="relative space-x-1 flex gap-x-2.5">
              <p
                className={`tracking-tighter whitespace-nowrap text-2xl font-bold ${
                  property?.type === "venta" ? "text-black" : "text-[#FCA640]"
                }`}
              >
                {property?.type === "venta"
                  ? property?.currency + " " + amount
                  : "$ " + amount}
              </p>
              {property?.type !== "venta" && (
                <div className="w-24 h-8 flex justify-start items-center text-black text-sm font-medium leading-5 opacity-50">
                  mensuales
                </div>
              )}
            </div>
            <div className="text-black text-2xl leading-9 tracking-tighter w-full overflow-hidden truncate whitespace-nowrap">
              {property?.propertyDetails.title}
            </div>
            <div className="w-full flex-shrink-0 text-black opacity-50 text-xl font-medium leading-6 overflow-hidden h-5 truncate whitespace-nowrap">
              {"Calle " +
                property?.propertyDetails.street +
                ", " +
                property?.propertyDetails.intersectionOne +
                " y " +
                property?.propertyDetails.intersectionTwo +
                " " +
                property?.propertyDetails.city +
                "."}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://file.rendit.io/n/IpxVZfFDqnLxwQTuRtr3.svg"
              alt="line"
              width={310}
              height={30}
              className="w-auto h-auto"
            />
          </div>
          <div className={style.contAllAtributtes}>
            <div className={style.contAtributte}>
              <Image
                src="/CardProperty/beedrom.svg"
                alt="beedrom"
                width={20}
                height={20}
              />
              <div className="text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                {property?.propertyDetails.bedroom}
              </div>
            </div>
            <div className="space-x-2 flex items-start">
              <Image
                src="/CardProperty/bathdroom.svg"
                alt="bathdroom"
                width={20}
                height={20}
              />
              <div className="text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                {property?.propertyDetails.bathroom}
              </div>
            </div>
            <div className={style.contAtributte}>
              <Image
                src="/CardProperty/surface.svg"
                alt="surface"
                width={20}
                height={20}
              />
              <div className="text-gray-600 text-sm font-medium leading-5 whitespace-nowrap">
                {property?.propertyDetails.surface + " m²"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
