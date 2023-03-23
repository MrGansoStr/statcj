import { AppBar, Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../CSS/Styled.css'
import { PublicRoutes } from "../../models/routes";
import UserLogged from "../UserLogged/UserLogged";
import { UserIsLogged } from "../../utilities/UserIsLogged";


function Header() {
  const { isLogged } = UserIsLogged();
  return (
    <>
      <Box className="static-view-header" >
        <AppBar component="nav" position="sticky" color="primary" className=" container-xxl navbar navbar-expand-lg py-0">
          <Box component="div" className="container-fluid " style={{ borderBottom: "0" }}>
            <Link className="navbar-brand w-25 text-center color-logo" to="/">
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
              className='collapse navbar-collapse p-0 px-3 text-start'
              id="navbarText"
            >
              <Grid item xs={9}>
                <Box component="ul" className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center color-header">
                  <Box component="li" className="nav-item ">
                    <Link className="nav-link active update-view-link-header header-link" to="/">
                      <Typography variant="overline">Inicio</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item" >
                    <Link className="nav-link active update-view-link-header" to={PublicRoutes.TOPICS}>
                      <Typography variant="overline" >Temas</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to={PublicRoutes.CALCULATOR}>
                      <Typography variant="overline">Calculadoras</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Muestreos</Typography>
                    </Link>
                  </Box>
                  {
                    /*
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to="/">
                      <Typography variant="overline">Probabilidades</Typography>
                    </Link>
                  </Box>
                    */
                  }
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to={PublicRoutes.DISTRIBUTION_TABLES}>
                      <Typography variant="overline">Buscar Valor en Tabla</Typography>
                    </Link>
                  </Box>
                  <Box component="li" className="nav-item">
                    <Link className="nav-link update-view-link-header" to={PublicRoutes.SEARCH_SYMBOL}>
                      <Typography variant="overline">Buscar Símbolos</Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              {
                isLogged ? (
                  <UserLogged />
                ) : (
                  <>
                    <Grid item xs="auto" className="p-2">
                      <Grid container justifyContent="flex-end" alignItems="center">
                        <Grid item xs="auto" className="mx-2">
                          <Link className="nav-link active update-view-link-header" to={PublicRoutes.LOGIN}>
                            <Typography component="span" variant="overline"> Login </Typography>
                          </Link>
                        </Grid>
                        <Grid item xs="auto" className="mx-2">
                          <Link className="nav-link active update-view-link-header" to={PublicRoutes.REGISTER}>
                            <Typography component="span" variant="overline"> Registro </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )
              }
            </Grid>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}
export default Header;