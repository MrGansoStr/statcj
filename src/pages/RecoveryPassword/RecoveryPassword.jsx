import { Box, Button, DialogActions, DialogContent, FormControl, FormGroup, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UseRecoveryPassword from '../../Hooks/UseRecoveryPassword';
import { LSKeys } from "../../models/LocalStorageKeys";
import { PrivateRoutes } from "../../models/routes";
import StyledErrorInput from "../../StyledComponents/StyledErrorInput/StyledErrorInput";
import { ClearLocalStorageValue } from "../../utilities/ManageLocalStorage";
import { BootstrapDialog, BootstrapDialogTitle, Transition } from "../SearchSymbol/Components/ExtraInfoBoxSymbol";

function RecoveryPassword() {

  const { showError, errorInModal, open, userToRecovery, ChangePassword, ChangePasswordSame, RecoveryPassword, HideModal, HideError, ChangeRecoveryEmail, RecoveryAccount } = UseRecoveryPassword();

  const userState = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    ClearLocalStorageValue(LSKeys.TOKENRECOVERY);
    if (Object.keys(userState).length > 1) {
      navigate(`/${PrivateRoutes.PRIVATE}`)
    }
    return () => { }
  }, []);

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
        <BootstrapDialog
          aria-labelledby="customized-dialog-title"
          onClose={HideModal}
          open={open}
          TransitionComponent={Transition}
        >
          <BootstrapDialogTitle onClose={HideModal}>
            <Typography variant="overline" className="fs-4 mx-4">Ingrese su nueva contraseña</Typography>
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <FormGroup >
              <FormControl className="py-3" >
                <TextField
                  variant="filled"
                  label="Usuario"
                  color="primary"
                  fullWidth
                  defaultValue={userToRecovery}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </FormControl>
              <FormControl className="py-3">
                <TextField
                  variant="standard"
                  label="Contraseña"
                  color="primary"
                  type="password"
                  fullWidth
                  maxRows={1}
                  onChange={ChangePassword}
                />
              </FormControl>
              <FormControl className="py-3">
                <TextField
                  variant="standard"
                  label="Repita la contraseña"
                  color="primary"
                  type="password"
                  fullWidth
                  maxRows={1}
                  onChange={ChangePasswordSame}
                />
              </FormControl>
            </FormGroup>
            {
              errorInModal ? <Box component="div" className="p-3"><StyledErrorInput show={errorInModal} HideError={HideError} /></Box> : null
            }
            <DialogActions >
              <Button
              variant="contained"
              color="primary"
              onClick={RecoveryPassword}
              >
                Recuperar
              </Button>
            </DialogActions>
          </DialogContent>
        </BootstrapDialog>
      </Box>
    </Box>
  );
}
export default RecoveryPassword;