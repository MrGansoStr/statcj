import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserModelLogged } from "../models/InitialUser";
import { createUser, deleteUser } from "../redux/states/user";
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from "../services/public.service";
import SubmitData from "../utilities/SubmitData";
import { PrivateRoutes } from "../models/routes";
import { InsertLocalStorageValueNormal } from "../utilities/ManageLocalStorage";
import { LSKeys } from "../models/LocalStorageKeys";


const UseLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SetUser = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  }

  const SetPass = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const SubmitForm = async (e) => {
    e.preventDefault();
    //console.log(username, password);
    try {
      let { data } = await SubmitData(LoginAPI({username: username, password: password}));
      dispatch(createUser(data?.InfoUser));
      InsertLocalStorageValueNormal(LSKeys.TOKEN, data.AccessToken);
      navigate(`/${PrivateRoutes.PRIVATE}`);
      window.location.reload();
    } catch (error) {
      throw error;
    }
    //window.location.reload();
  }


  return { username, password, SetUser, SetPass, SubmitForm };
}
export default UseLogin;