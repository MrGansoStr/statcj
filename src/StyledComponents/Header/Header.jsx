import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import '../CSS/Styled.css'

function Header() {
  return (
    <Box component="header" className="container-xl">
      <Typography
        variant="overline"
        className="fs-2 text-center m-0 m-auto align-items-center justify-content-center d-flex"
      >StatCJ
      </Typography>
      <Box component="nav" className="navbar navbar-expand-lg bg-light">
        <Box component="div" className="container-fluid">
        <Link className="navbar-brand w-25 text-center" to="/">
        El Logo
        </Link>

          <IconButton
              className="navbar-toggler without-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
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
            className="collapse navbar-collapse p-3 text-start"
            id="navbarText"
            >
            <Grid item xs="9" style={{borderBottom: "black solid 2px "}}>
            
              <Box component="ul" className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-center">
                <Box component="li" className="nav-item">
                  <Link className="nav-link active" to="/">
                    <Typography className="fs-5" variant="overline">Home</Typography>
                  </Link>
                </Box>
                <Box component="li" className="nav-item" >
                  <Link className="nav-link active" to="/">
                    <Typography className="fs-5" variant="overline">Features</Typography>
                  </Link>            
                </Box>
                <Box component="li" className="nav-item">
                  <Link className="nav-link " to="/">
                    <Typography className="fs-5" variant="overline">Pricing</Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs="auto">
              <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item xs="auto" className="mx-2">
                  <Link className="nav-link active" to="/">
                    <Typography className="fs-6" component="span" variant="overline"> Login </Typography>
                  </Link>
                </Grid>
                <Grid item xs="auto" className="mx-2">
                  <Link className="nav-link" to="/home">
                    <Typography className="fs-6" component="span" variant="overline"> Registro </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;