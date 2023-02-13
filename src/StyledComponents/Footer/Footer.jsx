import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TermsAndConditions from "./Components/TermsAndConditions";

function Footer()  {
  return (
    <>
      <Container component="footer" className="colors-footer" style={{backgroundColor: "#3C4048", color: "#fff"}}>
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
              <FacebookOutlinedIcon color="primary" />
              <TwitterIcon color="primary" />
              <InstagramIcon />
            </Box>
          </Grid>
          <Grid item xs={3} className="p-2 d-block">
            <TermsAndConditions />
          </Grid>
        </Grid>
      </Container>
      <Container component="div" className="d-flex align-items-center justify-content-center py-3  colors-footer">
        ©StatCJ 2023 | Todos los Derechos reservados
      </Container>
    </>
  );
}
export default Footer;