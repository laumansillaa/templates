import { modifyValueAmount } from "@/utils/functions";

export default function SectionPrice({ propertyId }) {
  return (
      <div className="flex flex-col border border-gray-200 rounded-xl px-5 py-3 gap-y-1">
        <h2 className="font-bold">
          {propertyId?.type === "venta" ? "Precio de venta" : "Valor mensual"}
        </h2>
        <div className="flex items-center gap-x-1">
          <span
            className={`font-bold text-3xl ${
              propertyId?.currency === "USD" ? "" : "text-[#FCA640]"
            }`}
          >
            {propertyId?.currency === "USD" ? "USD $" : "$"}{" "}
            {modifyValueAmount(propertyId?.amount)}
          </span>
          {propertyId?.type !== "venta" && (
            <p className="text-gray-400 text-sm">/alquiler</p>
          )}
        </div>
        {propertyId?.expenseAmount && (
          <div className="flex items-center gap-x-1 pl-1">
            <span className="font-bold text-3xl">
              $ {modifyValueAmount(propertyId?.expenseAmount)}
            </span>
            <p className="text-gray-400 text-sm">/expensas</p>
          </div>
        )}
      </div>
  );
}
