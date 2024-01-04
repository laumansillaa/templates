import Image from "next/image";

export default function Availability({ propertyId }) {
  return (
    <div className="flex border-b-2 border-gray-200 pb-3 gap-x-3 items-center">
      <div>
        <Image
          src="/Publications/calendarPublications.svg"
          alt="calendarPublications"
          width={20}
          height={20}
          className="w-auto h-auto"
        />
      </div>
      <div className="flex gap-x-1 items-center">
        <p className="font-medium text-sm">Disponible a partir de:</p>
        <span className="font-medium text-base">
          {propertyId?.disponibilidad[0]}
        </span>
      </div>
    </div>
  );
}
