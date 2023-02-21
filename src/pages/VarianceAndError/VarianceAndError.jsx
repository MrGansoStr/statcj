import { Box } from "@mui/material";
import BackPageButton from "../../StyledComponents/BackPageButton/BackPageButton";
import Variance_Calculator from './Components/Variance_Calculator';
import Variance_Description from './Components/Variance_Description';

function VarianceAndError() {
  return (
    <Box component="div" className="container-lg p-3 mt-3">
      <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
      <Variance_Calculator />
      <Variance_Description />
    </Box>
  );
}
export default VarianceAndError;