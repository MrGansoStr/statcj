import { Box } from "@mui/material";
import { DistTablesRoutes } from "../../models/routes";
import RedirectBox from "../../StyledComponents/RedirectBox/RedirectBox";

function MainDistributionTables() {
  return (
    <Box component="div" className="container-lg">
      <RedirectBox _height={"25rem"} _route={DistTablesRoutes.DISTZ} _title={"Valor en Tabla Z"} _info={"Los valores de la tabla Z P(x) <= 3.5"} />
    </Box>
  );
}
export default MainDistributionTables;