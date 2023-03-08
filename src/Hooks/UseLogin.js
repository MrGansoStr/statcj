import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserModelLogged } from "../models/InitialUser";
import { createUser, deleteUser } from "../redux/states/user";
import { useNavigate } from 'react-router-dom';

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

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(createUser(UserModelLogged));
    navigate('/')
  }

  return { username, password, SetUser, SetPass, SubmitForm };
}
export default UseLogin;