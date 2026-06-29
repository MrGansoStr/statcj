import isEmail from "validator/es/lib/isEmail.js";

export const ValidateEmail = (email) => {
  return isEmail(email);
};
