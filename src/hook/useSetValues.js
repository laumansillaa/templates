'use client'
import { useEffect } from "react";

export const useSetValues = (form, setForm, state, nameForm) => {
  useEffect(() => {
    const updatedForm = { ...form };
    const formData = state[nameForm];
    if (formData) {
      for (const key in form) {
        if (formData[key] !== undefined) {
          updatedForm[key] = formData[key];
        }
      }
      setForm(updatedForm);
    }
  }, [state]);
};
