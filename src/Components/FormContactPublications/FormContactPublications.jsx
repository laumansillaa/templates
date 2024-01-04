import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { DATA_PUBLICATION_INMO } from "@/Constants";
import { useClientIsReady } from "@/hook";
import { useWindowWidth } from "@react-hook/window-size";
import style from './styles/index.module.css'
export default function FormContactPublications() {
  const { clientIsReady } = useClientIsReady();
  const onlyWidth = useWindowWidth();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      consulta: "",
    },
  });

  const telefono = watch("telefono");

  const inputsForm1 = [
    {
      name: "nombre",
      label: "Nombre",
      placeholder: "Tu nombre",
    },
    {
      name: "apellido",
      label: "Apellido",
      placeholder: "Tu apellido",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    reset({
      nombre: "",
      apellido: "",
      telefono: "",
      consulta: "",
    });
  };

  const handlePhoneInput = (event) => {
    const value = event.target.value.replace(/[^\d]/g, "");
    setValue("telefono", value);
  };

  return (
    <div className={style.contGeneralForm}>
      <div className="flex items-center gap-x-2 border-b border-gray-300 pb-2">
        <div>
          <Image
            src="/Publications/logoCardPublications.svg"
            alt="logoPublications"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h3 className="font-bold text-sm">Inmobiliaria Bienes raíces</h3>
          <p className="text-xs text-gray-500">Partner oficial</p>
        </div>
      </div>
      <div className="flex flex-col">
        {DATA_PUBLICATION_INMO.map((data) => (
          <div className="flex gap-x-2 pt-3" key={data.key}>
            <Image src={data.image} alt={data.key} width={20} height={20} />
            <p className="text-sm">{data.text}</p>
          </div>
        ))}
      </div>
      {clientIsReady && onlyWidth > 766 && (
        <form
          className={style.contForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-x-2">
            {inputsForm1.map((input, index) => {
              return (
                <div className="flex flex-col gap-y-1 w-3/6" key={index}>
                  <label className="font-bold text-sm">{input.label}</label>
                  <input
                    className={style.inputForm}
                    placeholder={input.placeholder}
                    {...register(input.name)}
                  />
                  {errors[input.name] && (
                    <span className="text-red-500 text-xs">
                      {errors[input.name].message}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-sm">Teléfono</label>
              <input
                type="tel"
                className={style.inputPhone}
                placeholder="Escribí tu teléfono"
                {...register("telefono", {
                  required: "Este campo es requerido",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Ingresa un número de teléfono válido",
                  },
                })}
                onInput={handlePhoneInput}
                value={telefono}
              />
              {errors.telefono && (
                <span className="text-red-500 text-xs">
                  {errors.telefono.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="font-bold text-sm">Consulta</label>
              <textarea
                className={style.inputTextarea}
                placeholder="Dejanos un mensaje"
                {...register("consulta", {
                  required: "Este campo es requerido",
                })}
              />
              {errors.consulta && (
                <span className="text-red-500 text-xs">
                  {errors.consulta.message}
                </span>
              )}
            </div>
          </div>
          <input
            type="submit"
            className="cursor-pointer bg-[#FCA640] w-full text-white h-10 rounded-md"
          />
        </form>
      )}
    </div>
  );
}
