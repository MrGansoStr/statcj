
import { Box, Button, Paper, Stack, TextField, Typography, } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { CalculateValueZ, ReadValuesZ } from '../Calculations/CalculationsSearchZ';

const initialStateValuesZ = [
  { valueZ: 1.5, values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
];

import TableValues from './Components/TableValues';
import { useMemo } from 'react';
import { memo } from 'react';
import GaussianBell from './../StatGraphs/Components/GaussianBell';
import BackPageButton from '../../StyledComponents/BackPageButton/BackPageButton';

const toMem = () => {

  const [valueToSearch, setValueToSearch] = useState("");
  const [resultZ, setResultZ] = useState(null);

  const [valuesZ, setValuesZ] = useState(initialStateValuesZ);

  const TableVals = useMemo(() => valuesZ, [valuesZ]);

  useEffect(() => {
    AllSetValuesZ();
    return () => { }
  }, [])

  const AllSetValuesZ = () => {
    ReadValuesZ().then(data => setValuesZ(data));
  }

  const handleClickCalculate = (e) => {
    setResultZ(CalculateValueZ(Number(valueToSearch)));
  }

  const handleChangeZ = (e) => {

    setValueToSearch(e.target.value);
  }


  return (
    <Box component="div" className="p-2 mt-2">
      <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
      <Typography variant="h3" className="py-4 d-flex align-items-center justify-content-center">Tabla Z</Typography>
      <Box component="div">
        <GaussianBell />
      </Box>
      <TableValues valuesZ={TableVals} />
      <Typography variant="h5" className="d-flex align-items-center justify-content-center py-4">Encontrar el valor Z</Typography>
      <Stack component="div" spacing={3} className="align-items-center justify-content-center mt-4">
        <Typography component="p" variant="inherit" >
          Ejemplo: 1.96
        </Typography>
        <TextField
          variant="standard"
          color="secondary"
          label="Valor z"
          className="w-50"
          ref={InputToTest}
          onChange={handleChangeZ}
        />
        <Box component="div">
          <Typography component="p" variant="body1" >
            Probabilidad:
          </Typography>
          {
            resultZ ? (
              <Typography component="p" variant="inherit">
                {resultZ}
              </Typography>
            ) : null
          }
        </Box>
        <Button color="secondary" variant="outlined" onClick={handleClickCalculate}>Calcular</Button>
      </Stack>
    </Box>
  );
}

const SearchValueZ = memo(toMem);
export default SearchValueZ;