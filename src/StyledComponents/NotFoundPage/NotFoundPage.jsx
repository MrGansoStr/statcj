import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function NotFoundPage() {
  const navigate = useNavigate();
  let styledNotFound = {
    backgroundColor: "#ccc",
    height: "1224px",
    backgroundImage: `url(/images/notFoundPageNew.jpg)`,
    //http://localhost:port/notFoundPageNew.jpg
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  const goToHome = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className="bg-image" style={styledNotFound}>
      <div className="container m-0 m-auto align-items-center justify-content-center text-center">
        <div className="bg-image py-5 ">
          <Typography variant="h1" className="bg-image py-5 px-5 fw-bold text-uppercase text-white" style={{ fontSize: "15rem" }}>404</Typography>
          <h2 className="bg-image py-5 px-5 fw-bold text-uppercase text-white">Página No Encontrada</h2>
          <h4 className="bg-image py-5 px-5 fw-bold text-white">No lo rompiste, solo necesitas ir al inicio</h4>
        </div>
        <Button type="button" variant="contained" size="large" onClick={goToHome}>Ir al Inicio</Button>
      </div>
    </div>
  )
}
export default NotFoundPage;