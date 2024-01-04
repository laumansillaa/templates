'use client'
import { useEffect, useState } from "react";

// import { useGetPropertyTypes } from "./useGetPropertyTypes";

// import { useGetMapLocations } from "@/hooks/useGetLocation";
// import {
// //   getPartidos,
// //   getCiudades,
// //   getBarrios,
//   setFormData,
// } from "@/redux/actions";
import { useParams } from "next/navigation";
import { handleFormat } from "@/utils/handleFormat";
import { useClearShowErrors } from "@/utils/useClearShowErrors";
import { useGetPostForUpdated } from "@/utils/useGetPostForUpdated";
import { useSetValuesForUpdated } from "@/hook";

// const {
//   VITE_URL_USER_PANEL_CREATE_POST_2,
//   VITE_URL_CREATE_POST_2,
//   VITE_URL_UPDATE_POST_2,
//   VITE_URL_USER_UPDATE_POST_2,
// } = import.meta.env;

export const formOneControllers = (
  allValuesForm,
  form,
  setForm,
  errors,
  dispatch,
  navigate,
  postState
) => {
  const isAgente = true
  const isRealEstate = false
  const [showError, setShowError] = useState({});
  const params = useParams();

  const isUpdatedForm = params && params.id;

  const redirectPost = []
    // isAgente || isRealEstate
    //   ? VITE_URL_CREATE_POST_2
    //   : VITE_URL_USER_PANEL_CREATE_POST_2;

  const redirectUpdated = []
    // isAgente || isRealEstate
    //   ? VITE_URL_UPDATE_POST_2 + params.id
    //   : VITE_URL_USER_UPDATE_POST_2 + params.id;

  useGetPostForUpdated(dispatch, isUpdatedForm, params.id);

  const handleSetFormForUpdated = async () => {
    const obj = await useSetValuesForUpdated(postState);
    dispatch(setFormData(obj));
  };

  useEffect(() => {
    if (isUpdatedForm && postState) {
      handleSetFormForUpdated();
    }
  }, [postState]);

  const handleRedirectToGoBack = () => {};

//   useGetPropertyTypes(dispatch);

  // useGetMapLocations(dispatch, getPartidos, form.province, form.province, [
  //   form.province,
  // ]);

//   useGetMapLocations(
//     dispatch,
//     getCiudades,
//     form.state,  
//     { provincia: form.province, partido: form.state },
//     [form.state]
//   );

//   useGetMapLocations(
//     dispatch,
//     getBarrios,
//     form.city,
//     { provincia: form.province, partido: form.state, ciudad: form.city },
//     [form.city]
//   );

  const handleFormatNumber = (e) => {
    const result = handleFormat(e);
    setForm({
      ...form,
      [result.target.name]: result.target.value,
    });
  };

  const allowContinue = Object.keys(errors).length === 0;

  useClearShowErrors(errors, showError, setShowError);

  const handleSaveForm = async () => {
    if (!allowContinue) {
      setShowError(errors);
    } else {
      await dispatch(setFormData(allValuesForm));
      navigate.push(isUpdatedForm ? redirectUpdated : redirectPost);
      window.scrollTo(0, 0);
    }
  };

  return {
    handleRedirectToGoBack,
    handleSaveForm,
    handleFormatNumber,
    showError,
    isUpdatedForm,
  };
};
