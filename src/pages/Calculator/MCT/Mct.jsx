/*

@MTC -> Medidas de tendencia central
@MCT -> Measures of central tendency

*/

import { Box, Typography } from "@mui/material";
import MCT_calculator from "./Components/MCT_calculator";
import MCT_description from "./Components/MCT_description";

function Mct() {
  return (
    <Box component="div" className="container-lg py-4 mt-4">
      <Typography variant="h5" className="text-center">
        Medias de Tendencia Central
      </Typography>
      <MCT_calculator />
      <MCT_description />
    </Box>
  );
}
export default Mct;