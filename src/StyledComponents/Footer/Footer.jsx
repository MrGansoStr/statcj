import { Box, Grid, Typography } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TermsAndConditions from "./Components/TermsAndConditions";
function Footer() {
  return (
    <Box component="footer" className="colors-footer">
      <Grid container direction="row" spacing={4} justifyContent="space-evenly" alignItems="stretch" className="border mt-0 py-3 mb-3">
        <Grid item xs={3} className="d-flex justify-content-center align-items-center">
          <Typography component="div" variant="h6">StatCJ</Typography>
        </Grid>
        <Grid item xs={6} className="boder p-2">
          <Typography component="div" variant="h6" className="border d-flex align-items-center justify-content-center">
            Algo1
          </Typography>
          <Typography component="div" variant="h6" className="border d-flex align-items-center justify-content-center">
            Algo1
          </Typography>
          <Typography component="div" variant="h6" className="border d-flex align-items-center justify-content-center">
            Algo1
          </Typography>
          <Typography paragraph variant="h6" className="border d-flex align-items-center justify-content-center">
            Algo1
          </Typography>
          <Box component="div" className="d-flex align-items-center justify-content-center">
            <FacebookOutlinedIcon color="primary" />
            <TwitterIcon color="primary" />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={3} className="border p-2 d-block">
          <TermsAndConditions/>
        </Grid>
      </Grid>
      <Box component="div" className="d-flex align-items-center justify-content-center py-3 bg-light colors-footer">
        ©StatCJ 2023 | Todos los Derechos reservados
      </Box>
    </Box>
  );
}
export default Footer;