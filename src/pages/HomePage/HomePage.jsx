import { Box, TextField } from '@mui/material';
import { TablesFrecuencyDescription } from '../../Descriptions/FrecuencyTables/descriptions';
import RedirectBox from '../../StyledComponents/RedirectBox/RedirectBox';
import { PublicRoutes } from './../../models/routes';



function HomePage() {
  return (
    <Box component="div" className="container-xl py-3">
      <RedirectBox _height={"25rem"} _route={PublicRoutes.FRECUENCY_TABLES} _title={TablesFrecuencyDescription.title} _types={TablesFrecuencyDescription.types} _info={TablesFrecuencyDescription.description} />
      <RedirectBox _height={"25rem"} _title={"Medidas de Tendencia Central"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _title={"Varianzas y Desviaciones Estándar"}  _types={"Para datos agrupados y no agrupados"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _title={"Valor en Tabla "} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _title={"Buscar Símbolos"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _title={"Gráficos Estadísticos"} _info={"Informacion sobre la redirección "} />
    </Box>
  );
}
export default HomePage;
