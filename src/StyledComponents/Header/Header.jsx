import { Box, Grid, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../CSS/Styled.css'
import { useEffect, useRef } from "react";

function Header() {
  
  const StyleHeader = {
    borderBottom: "black solid 2px "
  }
  return (
    <>
      <Box component="header" className="container-xxl static-view-header">
        <Box component="nav" className="navbar navbar-expand-lg py-0" style={StyleHeader}>
          <Box component="div" className="container-fluid" style={{ borderBottom: "0" }}>
            <Link className="navbar-brand w-25 text-center " to="/">
              <Typography
                variant="overline"
                className="fs-4"
              >
                StatCJ
              </Typography>
            </Link>
            <IconButton

              className="navbar-toggler without-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" 
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              className={`collapse navbar-collapse p-0 px-3 text-start `}
              id="navbarText"
            >
              <Grid item xs={9} style={StyleHeader}>

                <Box component="ul" className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-center">
                  <Box component="li" className="nav-item">
                    <Link className="nav-link active update-view-link-header" to="/">
                      <Typography variant="overline">Home</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item" >
                    <Link className="nav-link active update-view-link-header" to="/">
                      <Typography variant="overline" >Features</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Pricing</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Probabilidades</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Muestreos</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Modelos Estadísticos</Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs="auto" style={StyleHeader} className="p-2">
                <Grid container justifyContent="flex-end" alignItems="center">
                  <Grid item xs="auto" className="mx-2">
                    <Link className="nav-link active update-view-link-header" to="/">
                      <Typography component="span" variant="overline"> Login </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs="auto" className="mx-2">
                    <Link className="nav-link active update-view-link-header" to="/home">
                      <Typography component="span" variant="overline"> Registro </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Header;