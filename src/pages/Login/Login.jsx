import { Box, Button, Checkbox, FormControl, FormGroup, Paper, TextField, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link, useNavigate } from "react-router-dom";
import UseLogin from "../../Hooks/UseLogin";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ClearLocalStorageValue } from "../../utilities/ManageLocalStorage";
import { LSKeys } from "../../models/LocalStorageKeys";
import { deleteUser } from "../../redux/states/user";


function Login() {
  const { SetUser, SetPass, SubmitForm } = UseLogin();
  const userState = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  useEffect(() => {
    if(Object.keys(userState).length > 1){
      navigate(`/${PrivateRoutes.PRIVATE}`)
    }
    else{
      dispatcher(deleteUser());
      ClearLocalStorageValue(LSKeys.TOKEN);
    }
    return () => {}
  },[]);
  return (
    <Box component="div" className="container-lg d-flex align-items-center justify-content-center">
      <Box component={Paper} className="p-3 m-0 m-auto mt-5 mb-5 w-75" sx={{ maxWidth: 500 }}>
        <Box component="div" className="text-center">
          <Typography className="p-3">
            <LockOpenIcon color="primary" className="fs-2" />
          </Typography>
          <Typography variant="h4">Login</Typography>
        </Box>
        <form onSubmit={SubmitForm}>
          <FormGroup className="p-3" >
            <FormControl variant="standard" className="py-3">
              <TextField
                type="text"
                variant="standard"
                color="secondary"
                label="Usuario"
                onChange={SetUser}
              />
            </FormControl>
            <FormControl variant="standard" className="py-3">
              <TextField
                type="password"
                variant="standard"
                color="secondary"
                label="Contraseña"
                onChange={SetPass}
              />
            </FormControl>
            <Box component="div">
              <Typography className="text-end">
                Olvidaste tu contraseña? &nbsp;
                <Link to="/recoverypassword">Restaurar Contraseña</Link>
              </Typography>
            </Box>
            <FormControl className="py-3">
              <Button type="submit" variant="outlined" color="primary">Iniciar Sesión</Button>
            </FormControl>
          </FormGroup>
        </form>
        <Box component="div">
          <Typography>No tienes cuenta? &nbsp;
            <Link to={`/${PublicRoutes.REGISTER}`}>Regístrate ahora</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Login;