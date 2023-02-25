import { Box, Typography } from "@mui/material";
import StatGraphs from "../StatGraphs/StatGraphs";
import Calculators from "./Components/Calculators";

import SearchTopic from "./Components/SearchTopic";

function MainHome() {

  return (
    <Box component="div">
      <Typography component="div" variant="h4" className="d-flex align-items-center justify-content-center p-4">
        StatCJ, de Estudiantes para Estudiantes
      </Typography>
      <SearchTopic />
      <Calculators />
      <StatGraphs />
    </Box>
  );
}
export default MainHome;