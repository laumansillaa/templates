import { objectValues } from "@/app/panel/create/rent/objectValues";

export const useSetValuesForUpdated = (state) => {
  const newState = { ...state.propertyDetails, ...state };
  let newObject = { ...objectValues, id: newState.id };
  if (state) {
    for (const key in newState) {
      if (newObject.StepOne.hasOwnProperty(key)) {
        newObject.StepOne[key] = newState[key] || newState.propertyDetails[key];
        if (key === "typeProp") {
          newObject.StepOne[key] = newState.typePropDetails.name;
        }
      } else if (newObject.StepTwo.hasOwnProperty(key)) {
        if (key === "video" && newObject.StepTwo[key].length) {
          newObject.StepTwo[key] = [JSON.parse(newState.propertyDetails[key])];
        } else {
          newObject.StepTwo[key] = newState[key];
        }
      } else {
        if (newState.propertyOwner) {
          newObject.StepThree.name = newState.propertyOwner.name;
          newObject.StepThree.lastname = newState.propertyOwner.lastname;
          newObject.StepThree.email = newState.propertyOwner.email;
          newObject.StepThree.phone = newState.propertyOwner.phone;
          newObject.StepThree.location = newState.propertyOwner.partido || "";
        }

        newObject.StepThree.documents = newState?.documents
          ? newState?.documents
          : null;
        newObject.StepThree.disponibilidad = newState.disponibilidad;
        newObject.StepThree.periodo = newState.periodo;
        newObject.StepThree.garantia = newState.garantia;
        newObject.StepThree.authorization = newState.authorization;
      }
    }
  }
  return newObject;
};
