import { useState } from 'react';
import { ValidateEmail } from '../utilities/ValidateEmail';

const UseRecoveryPassword = () => {
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const ChangeRecoveryEmail = (e) => {
    e.preventDefault();
    setRecoveryEmail(e.target.value);
  }

  const RecoveryAccount = (e) => {
    e.preventDefault();
    if (ValidateEmail(recoveryEmail)) {
      console.log("Recuperando Email");
      return;
    }
    else {
      setShowError(true);
      console.log("Hay algún error en su email");
      return;
    }
  }

  const HideError = (e) => {
    e.preventDefault();
    setShowError(false);
  }

  return { showError, HideError, ChangeRecoveryEmail, RecoveryAccount };
}
export default UseRecoveryPassword;