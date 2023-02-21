import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from './../../models/routes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function BackPageButton() {

  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(`/${PublicRoutes.HOME}`);
  }

  return (
    <Button type="button" onClick={goBack} variant="contained" color="secondary">
      <ArrowBackIosIcon fontSize="small"/> Regresar
    </Button>
  );
}
export default BackPageButton;