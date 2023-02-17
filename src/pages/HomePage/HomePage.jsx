import { Box, TextField } from '@mui/material';
import { ErrorEstandarDescription, MCTDescription, TablesFrecuencyDescription, VarianceDescription } from '../../Descriptions/DescriptionsAllTopics/descriptions';
import RedirectBox from '../../StyledComponents/RedirectBox/RedirectBox';
import { PublicRoutes } from './../../models/routes';



function HomePage() {
  return (
    <Box component="div" className="container-xl py-3">
      <RedirectBox _height={"25rem"} _route={PublicRoutes.FRECUENCY_TABLES} _title={TablesFrecuencyDescription.title} _types={TablesFrecuencyDescription.types} _info={TablesFrecuencyDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={PublicRoutes.MCT} _title={MCTDescription.title} _types={MCTDescription.types}  _info={MCTDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={PublicRoutes.VARIANCE} _title={`${VarianceDescription.title} y ${ErrorEstandarDescription.title}`}  _types={VarianceDescription.types} _info={VarianceDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={PublicRoutes.PERCENTILES} _title={"Percentiles"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _route={PublicRoutes.SYMBOLS} _title={"Buscar Símbolos"} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _route={PublicRoutes.SEARCHZ} _title={"Valor en Tabla "} _info={"Informacion sobre la redirección "} />
      <RedirectBox _height={"25rem"} _title={"Gráficos Estadísticos"} _info={"Informacion sobre la redirección "} />
    </Box>
  );
}
export default HomePage;
