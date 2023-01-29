import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, AlertTitle, Box, Button, Collapse, FormControlLabel, IconButton, Stack, Switch, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { calculateTotals, ProcessData } from '../../Calculations/CalculationsFrecuencyTables';


function Calculator() {
  const [grouped, setGrouped] = useState(false);
  const [RawData, setRawData] = useState('');
  const [processedData, setprocessedData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [totals, setTotals] = useState({});

  const handleChangeRawData = (e) => {
    setRawData(e.target.value);
  }
  const handleChange = (event) => {
    setGrouped(event.target.checked);
  };

  const calculate = async () => {
    if (RawData.length == 0) {
      setShowError(true);
    }
    else {
      await setprocessedData(ProcessData(RawData, grouped));
    }
  }

  useEffect(() => {
    setTotals(calculateTotals(processedData));
    return () => { }
  }, [processedData]);
  return (
    <>
    <Stack component="div" spacing={2} className="d-flex align-items-center justify-content-center m-0 m-auto py-5 w-75">
        <Typography component="div" variant="overline" className="fs-6">Ingrese sus Datos separados por un espacio {'(" ")'} por dato:</Typography>
        <Typography component="div" variant="overline" className="fs-6">Ejemplo:10 2 4 5 1 2 5 1 9 2 1</Typography>
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
          <Button color="success" variant="outlined" onClick={calculate}>Calcular</Button>
        </Box>
        <FormControlLabel control={
          <Switch
            checked={grouped}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />} label={`${grouped ? 'Datos AGRUPADOS' : 'Datos NO AGRUPADOS'}`} />
      </Stack>
      <Box component="div" className="d-flex align-items-center justify-content-center">
        <Collapse in={showError}>
          <Alert
            className="p-3"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowError(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Error</AlertTitle>
            <Typography className="fw-bold" variant="inherit">Los datos no están correctamente ingresados</Typography>
          </Alert>
        </Collapse>
      </Box>
      <TableContainer component={Paper} className="py-4">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="Frecuency Table">
          <TableHead>
            <TableRow>
              <TableCell>{grouped ? 'Intevalo' : 'Xi'}</TableCell>
              {grouped ? <TableCell align="right">Marca de Clase</TableCell> : null}
              <TableCell align="right">Frecuencia Abosulta</TableCell>
              <TableCell align="right">Frecuencia Absoluta Acumulada</TableCell>
              <TableCell align="right">Frecuencia Relativa </TableCell>
              <TableCell align="right">Frecuencia Relativa Acumulada</TableCell>
              <TableCell align="right"><b>F. Relativa %</b></TableCell>
              <TableCell align="right"><b>F. Relativa% Acumulada</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processedData.map((row) => (
              <TableRow
                key={row.rowid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {grouped ? (
                  <TableCell component="th" scope="row">
                    {'[ '}{row.minimo} - {row.maximo} {' )'}
                  </TableCell>)
                  : (<TableCell>{row.XI}</TableCell>)}

                {grouped ? <TableCell align="right">{row.marcaDeClase}</TableCell> : null}
                <TableCell align="right">{row.veces}</TableCell>
                <TableCell align="right">{row.acumuladoAbosulta}</TableCell>
                <TableCell align="right">{row.frelativa}</TableCell>
                <TableCell align="right">{row.acumuladoRelativa}</TableCell>
                <TableCell align="right">{row.porcentual}%</TableCell>
                <TableCell align="right">{row.acumuladoPorcentual} %</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={grouped ? 2 : 1}>Total</TableCell>
              <TableCell align="right">{totals.sumaAbsoluta}</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">{totals.sumaRelativa}</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">{totals.porcentualRelativa} % </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Calculator;