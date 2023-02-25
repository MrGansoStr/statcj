import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ErrorEstandarDescription, MCTDescription, TablesFrecuencyDescription, VarianceDescription } from "../../Descriptions/DescriptionsAllTopics/descriptions";
import { CalculatorRoutes } from "../../models/routes";
import RedirectBox from "../../StyledComponents/RedirectBox/RedirectBox";

function MainCalculator() {
  return (
    <Box component="div" className="container-xl py-3">
      <RedirectBox _height={"25rem"} _route={CalculatorRoutes.FRECUENCY_TABLES} _title={TablesFrecuencyDescription.title} _types={TablesFrecuencyDescription.types} _info={TablesFrecuencyDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={CalculatorRoutes.MCT} _title={MCTDescription.title} _types={MCTDescription.types}  _info={MCTDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={CalculatorRoutes.VARIANCE} _title={`${VarianceDescription.title} y ${ErrorEstandarDescription.title}`}  _types={VarianceDescription.types} _info={VarianceDescription.abstract} />
      <RedirectBox _height={"25rem"} _route={CalculatorRoutes.PERCENTILES} _title={"Percentiles"} _info={"Informacion sobre la redirección "} />
      <Outlet/>
    </Box>
  );
}
export default MainCalculator;