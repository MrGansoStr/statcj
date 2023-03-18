import { useState } from 'react';
import { LSKeys } from '../models/LocalStorageKeys';
import { FindEmailAPI } from '../services/public.service';
import SubmitData from '../utilities/SubmitData';
import { ValidateEmail } from '../utilities/ValidateEmail';
import { ClearLocalStorageValue, InsertLocalStorageValueNormal } from './../utilities/ManageLocalStorage';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../models/routes';
import { RecoveryPasswordAPI } from '../services/private.service';

const UseRecoveryPassword = () => {
  const [Email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);
  const [userToRecovery, setUserToRecovery] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSame, setPasswordSame] = useState("");
  const [errorInModal, setErrorInModal] = useState(false);

  const navigate = useNavigate();

  const ChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  const ChangePasswordSame = (e) => {
    e.preventDefault();
    setPasswordSame(e.target.value);
  }
  const ChangeRecoveryEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const RecoveryAccount = async (e) => {
    e.preventDefault();
    if (ValidateEmail(Email)) {
      try {
        let result = await SubmitData(FindEmailAPI({ email: Email }));
        if(result) {
          InsertLocalStorageValueNormal(LSKeys.TOKENRECOVERY, result?.data?.TokenRecovery);
          setUserToRecovery(result?.data?.username);
          setOpen(true);
          //console.log("Recuperando Email");
          return;
        }
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    }
    else {
      setShowError(true);
      console.log("Hay algún error en su email");
      return;
    }
  }

  const RecoveryPassword = async (e) => {
    e.preventDefault();
    if(password.length !== 0 && passwordSame.length !== 0 && password === passwordSame) {
      try {
        let result = await SubmitData(RecoveryPasswordAPI({username: userToRecovery, password: password}));
        if(result){
          ClearLocalStorageValue(LSKeys.TOKENRECOVERY);
          navigate(`/${PublicRoutes.LOGIN}`);
        }
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    }
    else{
      setErrorInModal(true);
    }
  }
  const OpenModal = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  const HideModal = (e) => {
    e.preventDefault();
    setOpen(false);
  }

  const HideError = (e) => {
    e.preventDefault();
    setShowError(false);
    setErrorInModal(false);
  }

  return { showError, open, userToRecovery, errorInModal, ChangePassword, ChangePasswordSame, RecoveryPassword, OpenModal, HideModal, HideError, ChangeRecoveryEmail, RecoveryAccount };
}
export default UseRecoveryPassword;