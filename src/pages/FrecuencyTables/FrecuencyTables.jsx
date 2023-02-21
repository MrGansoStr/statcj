import { Box, Typography } from "@mui/material";
import BackPageButton from "../../StyledComponents/BackPageButton/BackPageButton";
import Calculator from "./Components/Calculator";
import DescriptionTopic from "./Components/DescriptionTopic";


function FrecuencyTables() {

  return (
    <Box component="div" className="container-xl py-4" >
      <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
      <Typography variant="h4" className="text-center">Tabla de Frecuencias</Typography>
      <Calculator />
      <DescriptionTopic />
    </Box>
  );
}
export default FrecuencyTables; 