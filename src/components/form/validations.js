export const validationData = (userData, setErrors) => {
  const regValidateEmail = /^(([^<>()[\]\\#*¨?.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regCellPhone = /3[0-9]{9}/;
  const temporalErrors = {};
  const {
    name, email, cellphone, age,
  } = userData;
  console.log(userData);

  if (
    !name
    || (
      name?.split('').find((char) => (
        char.charCodeAt(0) < 65
        && char.charCodeAt(0) > 90
        && char.charCodeAt(0) < 97
        && char.charCodeAt(0) > 122)
      )
    )
    || name.split(' ').length < 2
  ) temporalErrors.name = 'Ingrese su nombre completo';
  else delete temporalErrors.name;

  if (
    !email
    || !regValidateEmail.test(email)
  ) temporalErrors.email = 'Ingrese un correo electrónico válido';
  else delete temporalErrors.email;

  if (
    !cellphone
    || !regCellPhone.test(cellphone)
    || cellphone.length !== 10
  ) temporalErrors.cellphone = 'Ingrese un número de teléfono de colombia';
  else delete temporalErrors.cellphone;

  if (
    !age
    || age < 18
    || age > 100
  ) temporalErrors.age = 'Su edad está por fuera del rango permitido';
  else delete temporalErrors.age;

  setErrors(temporalErrors);
  if (JSON.stringify(temporalErrors).length > 2) return false;
  return true;
};