import { Box } from "@mui/material";
import PercentileCalculator from './Components/PercentileCalculator';
import PercentileDescription from "./Components/PercentileDescription";

function Percentiles() {
  return (
    <Box component="div" className="container-lg">
      <PercentileCalculator />
      <PercentileDescription />
    </Box>
  );
}
export default Percentiles;