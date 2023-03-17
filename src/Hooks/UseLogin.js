import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserModelLogged } from "../models/InitialUser";
import { createUser, deleteUser } from "../redux/states/user";
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from "../services/public.service";
import SubmitData from "../utilities/SubmitData";
import { PrivateRoutes } from "../models/routes";


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
      navigate(`/${PrivateRoutes.PRIVATE}`);
    } catch (error) {
      throw error;
    }
    //window.location.reload();
  }


  return { username, password, SetUser, SetPass, SubmitForm };
}
export default UseLogin;