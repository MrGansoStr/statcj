import { Box } from "@mui/material";
import BackPageButton from "../../StyledComponents/BackPageButton/BackPageButton";
import PercentileCalculator from './Components/PercentileCalculator';
import PercentileDescription from "./Components/PercentileDescription";

function Percentiles() {
  return (
    <Box component="div" className="container-lg">
      <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
      <PercentileCalculator />
      <PercentileDescription />
    </Box>
  );
}
export default Percentiles;