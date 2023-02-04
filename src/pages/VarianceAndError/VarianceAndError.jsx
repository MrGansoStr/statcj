import { Box } from "@mui/material";
import Variance_Calculator from './Components/Variance_Calculator';
import Variance_CalculatorGrouped from "./Components/Variance_CalculatorGrouped";
import Variance_Description from './Components/Variance_Description';

function VarianceAndError() {
  return (
    <Box component="div" className="container-lg p-3 mt-3">
      <Variance_Calculator/>
      <Variance_CalculatorGrouped/>
      <Variance_Description/>
    </Box>
  );
}
export default VarianceAndError;