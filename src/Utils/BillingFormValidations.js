const validateNotEmpty = (string) => {
  return string != "";
};

const validateMinChars = (string, numChars) => {
  return string.length >= numChars;
};

const validateMaxChars = (string, numChars) => {
  return string.length <= numChars;
};

export const validateFirstName = (string) => {
  const trimmedString = string.trim();

  const notEmpty = validateNotEmpty(trimmedString);
  const validMinChars = validateMinChars(trimmedString, 2);
  const validMaxChars = validateMaxChars(trimmedString, 20);

  return notEmpty && validMinChars && validMaxChars;
};

export const validateLastName = (string) => {
  const trimmedString = string.trim();

  const notEmpty = validateNotEmpty(trimmedString);
  const validMinChars = validateMinChars(trimmedString, 2);
  const validMaxChars = validateMaxChars(trimmedString, 20);

  return notEmpty && validMinChars && validMaxChars;
};

export const validateEmail = (string) => {
  const trimmedString = string.trim();

  const notEmpty = validateNotEmpty(trimmedString);

  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    trimmedString
  );

  return notEmpty && validEmail;
};

export const validatePhone = (string) => {
  const trimmedString = string.trim();

  const notEmpty = validateNotEmpty(trimmedString);
  const validMinChars = validateMinChars(trimmedString, 7);
  const validMaxChars = validateMaxChars(trimmedString, 13);

  return notEmpty && validMinChars && validMaxChars;
};

export const validateAddress = (string) => {
  const trimmedString = string.trim();

  const notEmpty = validateNotEmpty(trimmedString);

  return notEmpty;
};
