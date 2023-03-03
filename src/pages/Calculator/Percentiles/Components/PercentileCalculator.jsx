import { Box, Button, FormControlLabel, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import { CalculateAllPercentil } from "../../../Calculations/CalculationsPercentiles";
import { ProcessInput } from '../../../../utilities/ProcessInput';
import StyledErrorInput from "../../../../StyledComponents/StyledErrorInput/StyledErrorInput";
import { ThereErrors } from "../../../../utilities/ThereErrors";

function PercentileCalculator() {
  const [rawData, setrawData] = useState("");
  const [grouped, setGrouped] = useState(true);
  const [calculatedPercentil, setcalculatedPercentil] = useState(null);
  const [TheNumK, setTheNumK] = useState(0);
  const [showError, setShowError] = useState(false);

  const HideError = (e) => {
    setShowError(false);
  }

  const handleChangeTheNumK = (e) => {
    setTheNumK(Number(e.target.value))
  }

  const handleChangeGrouped = (e) => {
    setGrouped(e.target.checked)
  }

  const handleChangeRawData = (e) => {
    setrawData(e.target.value);
  }

  const calculatePercentil = () => {
    if(ThereErrors(rawData) || ThereErrors(TheNumK, "percentil")){
      setShowError(true);
    }
    else {
      setcalculatedPercentil(CalculateAllPercentil(ProcessInput(rawData), TheNumK ,grouped))
    }
  }

  return (
    <Box component="div">
      <Stack component="div" spacing={3} className="p-3 mt-3 d-flex align-items-center justify-content-center">
        <Typography variant="h5">Calcular Percentiles, Quartiles y Deciles</Typography>
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
        <TextField
          type="number"
          label="K"
          maxRows={1}
          fullWidth
          variant="standard"
          className="w-50"
          onChange={handleChangeTheNumK}
        />
        <Box component="span" className="">
          <Button color="secondary" variant="outlined" onClick={calculatePercentil}>Calcular</Button>
        </Box>
        <FormControlLabel control={
          <Switch
            checked={grouped}
            onChange={handleChangeGrouped}
            inputProps={{ 'aria-label': 'controlled' }}
          />} label={`${grouped ? 'Datos AGRUPADOS' : 'Datos NO AGRUPADOS'}`} />
      </Stack>
      { showError ? <StyledErrorInput show={showError} HideError={HideError}/> : null }
      <Box component="div">
        <Typography component="p" variant="overline" className="fs-6">
          Percentil {calculatedPercentil ? calculatedPercentil.numk : "nn"}:
          {calculatedPercentil ? calculatedPercentil.percentil : "No calculado"}
        </Typography>
      </Box>
    </Box>
  );
}
export default PercentileCalculator;