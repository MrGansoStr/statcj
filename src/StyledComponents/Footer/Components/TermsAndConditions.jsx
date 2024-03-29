import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { PublicRoutes } from './../../../models/routes';

function TermsAndConditions() {
  return (
    <>
      <Typography component="div" variant="overline" className="h-25 text-center">Términos y Condiciones</Typography>
      <Box component="ul" className="navbar-nav h-75 align-items-center">
        <Typography component="li" variant="inherit" className="nav-item">
          <Link className="nav-link" to={PublicRoutes.HOME}>Términos</Link>
        </Typography>
        <Typography component="li" variant="inherit" className="nav-item">
          <Link className="nav-link" to={PublicRoutes.HOME}>Condiciones</Link>
        </Typography>
        <Typography component="li" variant="inherit" className="nav-item">
          <Link className="nav-link" to={PublicRoutes.HOME}>Privacidad</Link>
        </Typography>
      </Box>
    </>
  );
}
export default TermsAndConditions;