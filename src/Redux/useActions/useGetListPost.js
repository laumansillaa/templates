import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListPost } from "../slices/theme/theme.actions";

export const useGetListPost = (id) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getListPost("ad57a8d0-53c5-11ee-9ef5-1b0a254419f3"));
  }, []);
};
