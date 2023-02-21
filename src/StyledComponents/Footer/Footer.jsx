import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TermsAndConditions from "./Components/TermsAndConditions";
import { PublicRoutes } from "../../models/routes";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box component="footer" className="colors-footer container-xxl" style={{ backgroundColor: "#3C4048", color: "#fff" }}>
      <Grid container direction="row" spacing={4} justifyContent="space-evenly" alignItems="stretch" className=" mt-0 py-3 mb-3">
        <Grid item xs={3} className="d-flex justify-content-center align-items-center">
          <Typography component="div" variant="h6">StatCJ</Typography>
        </Grid>
        <Grid item xs={4} className="boder p-2 w-25">
          <Typography component="div" variant="inherit" className="d-flex align-items-start justify-content-start p-2">
            Ayuda
          </Typography>
          <Typography component="div" variant="inherit" className="d-flex align-items-start justify-content-start p-2">
            Acerca de Nosotros
          </Typography>
          <Typography component="div" variant="inherit" className="d-flex align-items-start justify-content-start p-2">
            Tecnologia
          </Typography>
          <Typography paragraph variant="inherit" className="d-flex align-items-start justify-content-start p-2">
            Blog
          </Typography>
          <Box component="div" className="d-flex align-items-start justify-content-start">
            <Link to={PublicRoutes.HOME}>
              <FacebookOutlinedIcon color="primary" />
            </Link>
            <Link to={PublicRoutes.HOME}>
              <TwitterIcon color="primary" />
            </Link>
            <Link to={PublicRoutes.HOME}>
              <InstagramIcon color="primary" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={3} className="p-2 d-block">
          <TermsAndConditions />
        </Grid>
      </Grid>
      <Container component="div" className="d-flex align-items-center justify-content-center py-3  colors-footer">
        ©StatCJ 2023 | Todos los Derechos reservados
      </Container>
    </Box>

  );
}
export default Footer;