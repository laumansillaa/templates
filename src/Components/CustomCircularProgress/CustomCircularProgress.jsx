import React from "react";
import { Oval } from "react-loader-spinner";

// size: Tamaño del círculo.
// color: Color de la barra de progreso.

const CustomCircularProgress = ({ size, color = "#7065F0" }) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={color}
      strokeWidth={4}
      strokeWidthSecondary={4}
      styles={{ padding: "0px" }}
    />
  );
};

export default CustomCircularProgress;