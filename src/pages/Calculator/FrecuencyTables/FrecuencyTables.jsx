import { Box, Typography } from "@mui/material";
import Calculator from "./Components/Calculator";
import DescriptionTopic from "./Components/DescriptionTopic";


function FrecuencyTables() {

  return (
    <Box component="div" className="container-xl py-4" >
      <Typography variant="h4" className="text-center">Tabla de Frecuencias</Typography>
      <Calculator />
      <DescriptionTopic />
    </Box>
  );
}
export default FrecuencyTables; 