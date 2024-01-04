"use client";
import { useEffect } from "react";

export const useGetMapLocations = (
  dispatch,
  getFunction,
  formValue,
  value,
  dependency
) => {
  useEffect(() => {
    if (formValue) {
      dispatch(getFunction(value));
    }
  }, dependency);
};
