import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPropertyTypes } from "../slices/theme/theme.actions";

export const useGetPropertyTypes = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertyTypes());
  }, []);
};
