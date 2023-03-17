import { Box, Button, FormControl, FormGroup, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseRecoveryPassword from '../../Hooks/UseRecoveryPassword';
import { PrivateRoutes } from "../../models/routes";
import StyledErrorInput from "../../StyledComponents/StyledErrorInput/StyledErrorInput";

function RecoveryPassword() {

  const { showError, HideError, ChangeRecoveryEmail, RecoveryAccount } = UseRecoveryPassword();

  const userState = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if(Object.keys(userState).length > 1){
      navigate(`/${PrivateRoutes.PRIVATE}`)
    }
    return () => {}
  },[]);

  return (
    <Box component="div" className="container-lg mt-5 mb-5">
      <Box component={Paper} className="d-flex align-items-center justify-content-center m-0 m-auto" sx={{ maxWidth: 550 }}>
        <form className="mt-5 mb-5 w-100 p-4" onSubmit={RecoveryAccount}>
          <Typography variant="h6">Ingrese su email para verificar su identidad</Typography>
          <FormGroup className="p-3">
            <FormControl>
              <TextField
                variant="standard"
                color="primary"
                label="Email"
                type="text"
                maxRows={1}
                onChange={ChangeRecoveryEmail}
              />
            </FormControl>
            {
              showError ? <Box component="div" className="p-3"><StyledErrorInput show={showError} HideError={HideError} /></Box> : null
            }
            <FormControl className="p-3 align-items-end">
              <Button type="submit" color="primary" variant="contained" sx={{ maxWidth: 170 }}>Verificar Email</Button>
            </FormControl>
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
}
export default RecoveryPassword;