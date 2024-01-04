'use client'
import { useState, useEffect } from "react";

export const useForm = (initialForm, formValidation, shouldUpdate = false) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [send, setSend] = useState(null);

  useEffect(() => {
    shouldUpdate
      ? setErrors(formValidation(form, shouldUpdate))
      : setErrors(formValidation(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (form[name] && Array.isArray(form[name])) {
      if (!form[name].includes(value)) {
        setForm({
          ...form,
          [name]: [...form[name], value],
        });
      } else {
        let filteredForm = form[name].filter((item) => item !== value);
        setForm({
          ...form,
          [name]: filteredForm,
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setResponse(true);
    } else {
      return;
    }
  };

  return {
    form,
    setForm,
    errors,
    response,
    send,
    handleChange,
    handleSubmit,
  };
};
