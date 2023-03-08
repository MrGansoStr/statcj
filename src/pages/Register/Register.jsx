import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Paper, TextField, Typography } from "@mui/material";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Link } from "react-router-dom";
import UseRegister from "../../Hooks/UseRegister";
import { PublicRoutes } from "../../models/routes";
import StyledErrorInput from "../../StyledComponents/StyledErrorInput/StyledErrorInput";

function Register() {

  const { acceptTerms, showError, HideError, ChangeUsername, ChangePassword, ChangeEmail, ChangeNames, ChangeLastNames, ChangeAcceptTerms, RegisterUser, ChangeSamePassword } = UseRegister();

  return (
    <Box component="div" className="container-lg d-flex align-items-center justify-content-center">
      <Box component={Paper} className=" p-3 m-0 m-auto mt-5 mb-5 w-75" sx={{ maxWidth: 500 }}>
        <Box component="div" className="text-center">
          <Typography className="p-3">
            <PersonAddOutlinedIcon color="primary" className="fs-2" />
          </Typography>
          <Typography variant="h4" >Registro</Typography>
        </Box>
        <form onSubmit={RegisterUser}>

          <FormGroup className="p-3" >
            <FormControl variant="standard" className="py-3">
              <TextField
                type="text"
                variant="standard"
                color="secondary"
                label="Usuario"
                name="Username"
                onChange={ChangeUsername}
              />
            </FormControl>
            <FormControl variant="standard" className="py-3">
              <TextField
                type="password"
                variant="standard"
                color="secondary"
                label="Contraseña"
                name="password"
                onChange={ChangePassword}
              />
            </FormControl>
            <FormControl variant="standard" className="py-3">
              <TextField
                type="password"
                variant="standard"
                color="secondary"
                label="Repita la Contraseña"
                onChange={ChangeSamePassword}
              />
            </FormControl>
            <FormControl variant="standard" className="py-3">
              <TextField
                type="text"
                variant="standard"
                color="secondary"
                label="Email"
                name="Email"
                onChange={ChangeEmail}
              />
            </FormControl>
            <FormControl className="py-3">
              <TextField
                type="text"
                variant="standard"
                color="secondary"
                label="Nombres"
                name="names"
                onChange={ChangeNames}
              />
            </FormControl>
            <FormControl variant="standard" className="py-3">
              <TextField
                type="text"
                variant="standard"
                color="secondary"
                label="Apellidos"
                name="LastNames"
                onChange={ChangeLastNames}
              />
            </FormControl>
            {
              showError ? <Box component="div" className="p-3"><StyledErrorInput show={showError} HideError={HideError} /></Box> : null
            }
            <Typography component="div" className="py-3">
              <FormControlLabel control={<Checkbox checked={acceptTerms} onChange={ChangeAcceptTerms} />} label="Al registrarse acepta recibir correos de nuevas funcionalidades de StatCJ." />
            </Typography>
            <FormControl className="py-3">
              <Button type="submit" variant="outlined" color="primary">Registrarme</Button>
            </FormControl>
          </FormGroup>
        </form>
        <Box component="div">
          <Typography>Ya tienes cuenta? &nbsp;
            <Link to={`/${PublicRoutes.LOGIN}`}>Inicia sesión</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Register;