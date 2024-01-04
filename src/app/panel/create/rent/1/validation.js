export const validationStepOne = (form) => {
    const errors = {};
    if (!form.title) {
      errors.title = "Debes ingresar un titulo";
    } else if (form.title?.length > 50) {
      errors.title = "El título debe tener menos de 50 caracteres";
    } 
  
    if (!form.description) {
      errors.description = "Debes ingresar una descripción para la publicación";
    } else if (form.description?.length > 2000) {
      errors.description = "La descripción debe tener menos de 2000 caracteres";
    }
  
    if (!form.typeProp) {
      errors.typeProp = "Debe seleccionar un tipo de propiedad";
    }
  
    if (!form.amount) {
      errors.amount = "Debe ingresar un monto de alquiler mensual";
    }
  
    if (!form.expenseAmount) {
      errors.expenseAmount = "Debe ingresar un monto para las expensas";
    }
  
    if (!form.postalCode) {
      errors.postalCode = "Debe ingresar un codigo postal";
    }
  
    if (!form.street) {
      errors.street = "Debe ingresar su dirección";
    }
  
    if (!form.intersectionOne) {
      errors.intersectionOne = "Debe ingresar una intersección";
    }
  
    if (!form.pais) {
      errors.pais = "Debe seleccionar una opción";
    }
  
    if (!form.province) {
      errors.province = "Debe seleccionar una opción";
    }
  
    if (!form.state) {
      errors.state = "Debe seleccionar una opción";
    }
  
    if (!form.city) {
      errors.city = "Debe seleccionar una opción";
    }
  
    if (!form.number) {
      errors.number = "Debe ingresar el número de la propiedad";
    }
  
    if (form?.mapUbication?.length !== 2) {
      errors.mapUbication = "Debe marcar la ubicación en el mapa";
    }
  
  
    return errors;
  };
  