"use client";
import style from "./styles/form.module.css";
import styleButtons from "../../styles/buttonsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";
import { formOneControllers } from "./formOne.controllers";
import { validationStepOne } from "./validation";
// import MapViewCreatePost from "../../../mapView/mapViewCreatePost";

import { LabelForm } from "@/Components/LabelForm/LabelForm";
// import { Message } from "../../Temporales/stylesTemporales";
import { CustomBorderContainerForm } from "@/Components/CustomBorderContainerForm/CustomBorderContainerForm";

import { useRouter } from "next/navigation";
import { ArrProvincias } from "@/utils/provincias";
import { useClientIsReady, useForm, useSetValues } from "@/hook";
import {
  CustomInputForm,
  CustomInputWithCurrencies,
  CustomTextarea,
  calculateRows,
} from "@/Components/Inputs";
import { CustomSelectWithLabelText } from "@/Components/Select/CustomSelectWithLabelText";
import { AlertMessage } from "@/Components/AlertMessage/AlertMessage";
import { useEffect, useState } from "react";
import ContainerLayoutFormRent from "@/Components/ContainerLayoutFormRent/ContainerLayoutFormRent";
import Message from "@/Components/Message/Message";
import { useGetPropertyTypes } from "@/Redux/useActions";

const FormOne = () => {
  const onlyWidth = useWindowWidth();
  const dispatch = useDispatch();
  const navigate = useRouter();
  //   const arrState = useSelector((state) => state.map);
  //   const arrCities = useSelector((state) => state.mapCiudades);
  //   const arrBarrios = useSelector((state) => state.mapBarrios);
  //   const formState = useSelector((state) => state.form);
  //   const postState = useSelector((state) => state.post);

  let propTypes = useSelector((state) => state.theme.propertyTypes);

  const [allRows, setAllRows] = useState(4);
  const [inputMobileWidth, setHandleWidth] = useState(null);

  const arrState = [];
  const arrCities = [];
  const arrBarrios = [];
  const formState = [];
  const postState = [];
  // let propTypes = [];
  // propTypes = propTypes.filter((elem) => elem.applications.includes("rent"));

  const { clientIsReady } = useClientIsReady();

  const initialForm = {
    title: "",
    description: "",
    typeProp: "",
    amount: "",
    expenseAmount: "",
    postalCode: "",
    street: "",
    intersectionOne: "",
    intersectionTwo: "",
    pais: "",
    province: "",
    state: "",
    city: "",
    barrio: "",
    number: "",
    piso: "",
    depto: "",
    mapUbication: [],
  };

  const { form, setForm, errors, handleChange } = useForm(
    initialForm,
    validationStepOne
  );

  useSetValues(form, setForm, formState, "StepOne");
  useGetPropertyTypes();

  const allValuesForm = {
    StepOne: {
      ...form,
    },
  };

  const {
    handleRedirectToGoBack,
    handleSaveForm,
    handleFormatNumber,
    showError,
  } = formOneControllers(
    allValuesForm,
    form,
    setForm,
    errors,
    dispatch,
    navigate,
    postState
  );

  const rows = calculateRows(onlyWidth);

  console.log("propTypes", inputMobileWidth);

  // styled={{
  //   width:
  //     onlyWidth < 480
  //       ? "85%"
  //       : onlyWidth > 1200
  //         ? "301px"
  //         : null,
  // }}

  useEffect(() => {
    if (onlyWidth < 480) {
      setAllRows(4);
      setHandleWidth("85%");
    } else if (onlyWidth > 1200) {
      setAllRows(8);
      setHandleWidth("325px");
    }
  }, [onlyWidth]);

  console.log("FORM", form);
  console.log("ERROR", errors);
  console.log("SHOWERRROS", showError);

  return (
    <ContainerLayoutFormRent titulo={"Información del inmueble"} type={"rent"}>
      <div className={style.contFormGeneral}>
        <CustomBorderContainerForm>
          <div className={style.contFlexColumn}>
            <div className={style.title}>
              {/* {onlyWidth < 766 ? "Informacion" : "Informacion del inmueble"} */}
              Informacion del inmueble
            </div>
            <div className={style.contSectionOne}>
              <div className={style.contOne}>
                <CustomInputForm
                  labelText="Título"
                  placeholder="Ej: Departamento 2 habitaciones"
                  name="title"
                  min={0}
                  max={32}
                  value={form.title}
                  handleChange={handleChange}
                  isValid={
                    form.title !== "" && errors.title
                      ? true
                      : errors.title && form.title
                      ? false
                      : showError.title
                      ? false
                      : null
                  }
                />
                <CustomTextarea
                  placeholder="Escribí la descripción del inmueble"
                  name="description"
                  labelText="Descripción"
                  cols={50}
                  rows={allRows}
                  value={form.description}
                  handleChange={handleChange}
                  isValid={
                    form.description !== "" && errors.description
                      ? true
                      : errors.description && form.description
                      ? false
                      : showError.description
                      ? false
                      : null
                  }
                  errorMessage={
                    form.description !== "" && errors.description
                      ? true
                      : errors.description && form.description
                      ? false
                      : showError.description
                      ? false
                      : null
                  }
                />
              </div>
              <div className={style.contFlexColumn1}>
                <CustomSelectWithLabelText
                  text="Tipo de propiedad *"
                  options={propTypes}
                  onChange={handleChange}
                  value={form.typeProp}
                  id="createform-one-typeProp"
                  name="typeProp"
                  placeholder="Tipo"
                />
                <CustomInputWithCurrencies
                  name={"amount"}
                  placeholder={"50.000"}
                  labeltext="Valor mensual *"
                  value={form.amount}
                  maxLength={11}
                  onChange={handleFormatNumber}
                />
                <CustomInputWithCurrencies
                  name={"expenseAmount"}
                  placeholder={"50.000"}
                  labeltext="Expensas *"
                  value={form.expenseAmount}
                  maxLength={11}
                  onChange={handleFormatNumber}
                  styled={{
                    width:
                      onlyWidth < 480
                        ? "85%"
                        : onlyWidth > 1200
                        ? "301px"
                        : null,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={style.contUbicacion}>
            {/* <div className={style.title}>Ubicación</div> */}
            <div className={style.contBoxAuxUbicacion}>
              <div className={style.contBoxTwo}>
                <CustomInputForm
                  placeholder="Ej: Calle 462a"
                  labelText="Calle *"
                  name="street"
                  value={form.street}
                  handleChange={handleChange}
                  isValid={
                    form.street !== "" && errors.street
                      ? true
                      : errors.street && form.street
                      ? false
                      : showError.street
                      ? false
                      : null
                  }
                />
                <div className={style.contBoxIntersectionAux}>
                  <CustomInputForm
                    placeholder="Ej: Calle 12"
                    labelText="Intersección 1 *"
                    name="intersectionOne"
                    value={form.intersectionOne}
                    handleChange={handleChange}
                    isValid={
                      form.intersectionOne !== "" && errors.intersectionOne
                        ? true
                        : errors.intersectionOne && form.intersectionOne
                        ? false
                        : showError.intersectionOne
                        ? false
                        : null
                    }
                    styled={{
                      width: inputMobileWidth,
                    }}
                  />
                  <CustomInputForm
                    placeholder="Ej: Calle 13"
                    labelText="Intersección 2"
                    name="intersectionTwo"
                    value={form.intersectionTwo}
                    handleChange={handleChange}
                    styled={{
                      width: inputMobileWidth,
                    }}
                    isValid={
                      form.intersectionOne !== "" && errors.intersectionOne
                        ? true
                        : errors.intersectionOne && form.intersectionOne
                        ? false
                        : showError.intersectionOne
                        ? false
                        : null
                    }
                  />
                </div>
              </div>
              <div className={style.contBoxTwo}>
                <CustomSelectWithLabelText
                  text="País *"
                  options={[{ name: "Argentina" }]}
                  onChange={handleChange}
                  value={form.pais}
                  id="createform-one-pais"
                  name="pais"
                  placeholder="Argentina"
                />
                <CustomSelectWithLabelText
                  text="Provincia *"
                  options={ArrProvincias}
                  onChange={handleChange}
                  value={form.province}
                  id="createform-one-province"
                  name="province"
                  placeholder="Buenos Aires"
                />
                <CustomSelectWithLabelText
                  text="Partido *"
                  options={
                    arrState.data?.length
                      ? arrState.data
                      : [{ name: "No hay ubicaciones disponibles" }]
                  }
                  onChange={handleChange}
                  value={form.state}
                  id="createform-one-state"
                  name="state"
                  placeholder="La Plata"
                />
              </div>
              <div className={style.contBoxTwo}>
                <CustomSelectWithLabelText
                  text="Ciudad/Localidad *"
                  options={
                    arrCities?.length
                      ? arrCities
                      : [{ name: "No hay ubicaciones disponibles" }]
                  }
                  onChange={handleChange}
                  value={form.city}
                  id="createform-one-city"
                  name="city"
                  placeholder="La Plata"
                />
                <CustomSelectWithLabelText
                  text="Barrio/Zona. Opcional "
                  options={
                    arrBarrios.data?.length
                      ? arrBarrios.data
                      : [{ name: "No hay ubicaciones disponibles" }]
                  }
                  onChange={handleChange}
                  value={form.barrio}
                  id="createform-one-barrio"
                  name="barrio"
                  placeholder="Los Hornos"
                />

                {clientIsReady && onlyWidth > 766 && (
                  <CustomInputForm
                    placeholder="Ej: 562"
                    labelText="Número *"
                    name="number"
                    value={form.number}
                    handleChange={handleChange}
                    type="number"
                  />
                )}
              </div>
              <div className={style.contBoxTwo}>
                <div className={style.boxAux}>
                  {clientIsReady && onlyWidth < 766 && (
                    <CustomInputForm
                      placeholder="Ej: 562"
                      labelText="Número *"
                      name="number"
                      value={form.number}
                      handleChange={handleChange}
                      type="number"
                      valid={
                        (form.number !== "" && errors.number) ||
                        showError.number
                          ? "false"
                          : "true"
                      }
                      styled={{ width: inputMobileWidth }}
                    />
                  )}
                  <CustomInputForm
                    placeholder="Ej: 1900"
                    labelText="Código Postal *"
                    name="postalCode"
                    value={form.postalCode}
                    handleChange={handleChange}
                    styled={{
                      width: inputMobileWidth,
                    }}
                    isValid={
                      form.postalCode !== "" && errors.postalCode
                        ? true
                        : errors.postalCode && form.postalCode
                        ? false
                        : showError.postalCode
                        ? false
                        : null
                    }
                  />
                </div>
                <div className={style.boxAux}>
                  <CustomInputForm
                    placeholder="Ej: 4"
                    labelText="Piso. Opcional"
                    name="piso"
                    type="number"
                    value={form.piso}
                    handleChange={handleChange}
                    styled={{
                      width: inputMobileWidth,
                    }}
                    isValid={
                      form.piso !== "" && errors.piso
                        ? true
                        : errors.piso && form.piso
                        ? false
                        : showError.piso
                        ? false
                        : null
                    }
                  />
                  <CustomInputForm
                    placeholder="Ej: C"
                    labelText={"Departamento."}
                    name="depto"
                    value={form.depto}
                    handleChange={handleChange}
                    styled={{
                      width: inputMobileWidth,
                    }}
                    isValid={
                      form.depto !== "" && errors.depto
                        ? true
                        : errors.depto && form.depto
                        ? false
                        : showError.depto
                        ? false
                        : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.contMap}>
            <LabelForm text="Ubicá la propiedad dentro del mapa *" />
            {/* <MapViewCreatePost setForm={setForm} form={form} /> */}
          </div>
          <AlertMessage />
        </CustomBorderContainerForm>
        <div className={styleButtons.containerButtonsForm}>
          <button
            className={styleButtons.goToBack}
            onClick={() => handleRedirectToGoBack()}
          >
            Atrás
          </button>
          <button className={styleButtons.goToNext} onClick={handleSaveForm}>
            Siguiente
          </button>
        </div>
      </div>
    </ContainerLayoutFormRent>
  );
};

export default FormOne;
