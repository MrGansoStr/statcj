import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const UserModelTest = {
  idUser: Number,
  username: String,
  gender: Number,
  name: String,
  lastName: String,
  email: String
}

export const UserIsLogged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const userState = useSelector(store => store.user);

  useEffect(() => {
    if(Object.keys(userState).length === 1){
      setIsLogged(false);
    }
    else{
      setIsLogged(true);
    }
    return () => { }
  }, [userState]);
  return { isLogged };
}