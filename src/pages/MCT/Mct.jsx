/*

@MTC -> Medidas de tendencia central
@MCT -> Measures of central tendency

*/

import { Box, Typography } from "@mui/material";
import BackPageButton from "../../StyledComponents/BackPageButton/BackPageButton";
import MCT_calculator from "./Components/MCT_calculator";
import MCT_description from "./Components/MCT_description";

function Mct() {
  return (
    <Box component="div" className="container-lg py-4 mt-4">
      <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
      <Typography variant="h5" className="text-center">
        Medias de Tendencia Central
      </Typography>
      <MCT_calculator />
      <MCT_description />
    </Box>
  );
}
export default Mct;