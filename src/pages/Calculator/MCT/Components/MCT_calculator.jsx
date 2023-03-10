import { Stack, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CalculateAllMCT } from "../../../Calculations/CalculationsMct";
import { ProcessInput } from '../../../../utilities/ProcessInput';
import StyledErrorInput from "../../../../StyledComponents/StyledErrorInput/StyledErrorInput";
import { ThereErrors } from "../../../../utilities/ThereErrors";

function MCT_calculator() {

  const [rawData, setRawData] = useState("");
  const [calculatedValues, setcalculatedValues] = useState(null);
  const [showError, setShowError] = useState(false);
  const HideError = (e) => {
    setShowError(false);
  }
  const handleChangeRawData = (e) => {
    setRawData(e.target.value);
  }

  const calculateMCT = (e) => {
    if(ThereErrors(rawData)){
      setShowError(true);
    }
    else {
      setcalculatedValues(CalculateAllMCT(ProcessInput(rawData)));
    }
  }
  return (
    <Stack component="div" spacing={3} className="d-flex align-items-center">
      <TextField
        type="text"
        id="standard-multiline-flexible"
        label="Datos"
        multiline
        maxRows={15}
        fullWidth
        variant="standard"
        className="w-75"
        onChange={handleChangeRawData}
      />
      <Box component="span" className="">
        <Button color="secondary" variant="outlined" onClick={calculateMCT}>Calcular</Button>
      </Box>
      {
        showError ? <StyledErrorInput show={showError} HideError={HideError}/> : null
      }
      <Box component="div">
        <Typography component="p" variant="overline" className="fs-6">
          Media: {calculatedValues ? <b>{calculatedValues.Media}</b> : "no Calculado"}
        </Typography>
        <Typography component="p" variant="overline" className="fs-6">
          Moda: {calculatedValues ? <b>{calculatedValues.Moda}</b> : "no Calculado"}
        </Typography>
        <Typography component="p" variant="overline" className="fs-6">
          Mediana: {calculatedValues ? <b>{calculatedValues.Mediana}</b> : "no Calculado"}
        </Typography>
      </Box>
    </Stack>
  );
}
export default MCT_calculator;