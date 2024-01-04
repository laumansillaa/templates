'use client'
import { useState } from "react";
import { InputFile } from "./InputFile";
import { LabelForm } from "../LabelForm/LabelForm";

import style from './styles/index.module.css'
import getCloudinaryURL from "@/helpers/getCloudinaryURL";

export const InputLoadFile = ({
  textLabel,
  id,
  name,
  formatsAccept,
  form,
  setForm,
  valid,
  fileLimit = 1,
  textInput,
  multiple = false,
  width = "-webkit-fill-available",
  cloudinaryPreset = "DocumentMultiple",
}) => {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleFiles = async (e) => {
    setLoader(true);
    setSuccess(false);
    setFailure(false);

    const selectedFiles = e.target.files;
    const uploadedFiles = [];

    for (let i = 0; i < Math.min(selectedFiles.length, fileLimit); i++) {
      const res = await getCloudinaryURL(selectedFiles[i], cloudinaryPreset);
      if (res) {
        uploadedFiles.push(res);
      }
    }

    if (uploadedFiles.length > 0) {
      if (form[name] && Array.isArray(form[name])) {
        setForm({
          ...form,
          [name]: [...form[name], ...uploadedFiles],
        });
      } else {
        multiple
          ? setForm({ ...form, [name]: uploadedFiles })
          : setForm({ ...form, [name]: uploadedFiles[0] });
      }
      setLoader(false);
      setFailure(false);
      setSuccess(true);
    } else {
      setLoader(false);
      setSuccess(false);
      setFailure(true);
    }
  };

  return (
    <div className={style.conInput}>
      <LabelForm text={textLabel} />
      <InputFile
        id={id}
        name={name}
        formatsAccept={formatsAccept}
        form={form}
        valid={valid}
        handleFiles={handleFiles}
        loader={loader}
        success={success}
        failure={failure}
        textInput={textInput}
        multiple={multiple}
        width={width}
      />
    </div>
  );
};
