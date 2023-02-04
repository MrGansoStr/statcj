
import { Stack, TextField, Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import { CalculateVarianceAndError } from '../../Calculations/CalculationsVarianceAndError';
import { ProcessInput } from './../../../utilities/ProcessInput';
function Variance_Calculator() {

  const [rawData, setRawData] = useState("");
  const [calculatedData, setcalculatedData] = useState(null);

  const handleChangeRawData = (e) => {
    setRawData(e.target.value);
  }

  const calculateVarianceAndError = () => {
    setcalculatedData(CalculateVarianceAndError(ProcessInput(rawData)));
  }
  return (
    <Stack component="div" spacing={3} className="d-flex align-items-center justify-content-center">
      <Typography variant="h5">Varianza y El Error Estándar</Typography>
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
        <Button color="success" variant="outlined" onClick={calculateVarianceAndError}>Calcular</Button>
      </Box>
      <Box component="div" className="py-4">
        <Typography component="p" variant="overline" className="fs-5">
          Varianza: <b>

            {
              calculatedData ? calculatedData.varianza : "No Calculado"
            }
          </b>
        </Typography>
        <Typography component="p" variant="overline" className="fs-5">
          Error Estándar: <b>
            {
              calculatedData ? calculatedData.error : "No calculado"
            }
          </b>
        </Typography>
      </Box>
    </Stack>
  );
}
export default Variance_Calculator;