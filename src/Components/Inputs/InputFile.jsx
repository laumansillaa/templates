"use client";
import style from "./styles/index.module.css";
// import { CheckErrorOutline, CheckSuccessOutline } from "@/assets/icons";
// import iconLoadFile from "@/assets/iconLoadFile.svg";
// import deleteIcon from "@/assets/deleteIcon.svg";
import { useState } from "react";
import Image from "next/image";
import CustomCircularProgress from "../CustomCircularProgress/CustomCircularProgress";

export const InputFile = ({
  textInput = "Adjuntar",
  id,
  name,
  formatsAccept,
  form,
  valid,
  handleFiles,
  loader,
  success,
  failure,
  multiple,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  const statusSuccess = Array.isArray(form[name])
    ? form[name].length > 0
      ? true
      : false
    : success || form[name]
    ? true
    : false;

  return (
    <label htmlFor={id}>
      <div className={style.contTextInputFile}>
        {/* <Image src={iconLoadFile} className={styled.icon} /> */}
        <p className={style.textInputfile}>{textInput}</p>
      </div>
      {loader && <CustomCircularProgress size={23} />}
      {/*    {(!loader && statusSuccess && selectedImage !== null )&& <div className="wrapperCheck"><CheckSuccessOutline size={24} /><img src={deleteIcon} size={24}  onClick={() =>   handleImageDelete()} /></div>  }
      {(failure && !statusSuccess) && <CheckErrorOutline size={24} />} */}
      <input
        id={id}
        type="file"
        name={name}
        accept={formatsAccept}
        onChange={(e) => {
          handleFiles(e);
          setSelectedImage(e.target.files[0]);
        }}
        multiple={multiple}
        style={{ display: "none" }}
      />
    </label>
  );
};
