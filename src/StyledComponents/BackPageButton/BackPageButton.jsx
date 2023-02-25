import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function BackPageButton({_urlBase = ""}) {

  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(`${_urlBase}`);
  }

  return (
    <Button type="button" onClick={goBack} variant="contained" color="secondary">
      <ArrowBackIosIcon fontSize="small"/> Regresar
    </Button>
  );
}
export default BackPageButton;