import { useState } from "react";
import { ValidateEmail } from "../utilities/ValidateEmail";
import { GenderModel } from './../models/InitialUser';

const UseRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [samepassword, setSamePassword] = useState("");
  const [email, setEmail] = useState("");
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showError, setShowError] = useState(false);
  const [gender, setGender] = useState(GenderModel.default);

  const ChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }
  
  const ChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  const ChangeSamePassword= (e) => {
    e.preventDefault();
    setSamePassword(e.target.value);
  }

  const ChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const ChangeNames = (e) => {
    e.preventDefault();
    setNames(e.target.value);
  }

  const ChangeLastNames = (e) => {
    e.preventDefault();
    setLastNames(e.target.value);
  }

  const ChangeAcceptTerms = (e) => {
    e.preventDefault();
    setAcceptTerms(!acceptTerms);
  }

  const ChangeGender = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  }

  const HideError = (e) => {
    e.preventDefault();
    setShowError(false)
  }

  const RegisterUser = (e) => {
    e.preventDefault();
    if(password != samepassword) {
      setShowError(true);
      console.log("Hay Error en las contraseñas");
      return;
    }
    if(!ValidateEmail(email)) {
      setShowError(true);
      console.log("Hay Algun Error en su Email");
      return;
    }
    if(gender === 0) {
      setShowError(true);
      console.log("Seleccione un género");
      return;
    }
    if(acceptTerms === false) {
      setShowError(true);
      console.log("El usuario debe aceptar los terminos y condiciones");
      return;
    }
    else {
      console.log(username, password, email, names, lastNames);
      return;
    }
  }

  return {username, password, email, names, lastNames, acceptTerms, showError, gender, ChangeGender, HideError, ChangeUsername, ChangePassword, ChangeEmail, ChangeNames, ChangeLastNames, RegisterUser, ChangeAcceptTerms, ChangeSamePassword };
}
export default UseRegister;