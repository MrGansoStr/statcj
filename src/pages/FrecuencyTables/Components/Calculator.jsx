import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, AlertTitle, Box, Button, Collapse, Divider, FormControlLabel, Grid, IconButton, Stack, Switch, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { calculateAmplitud, calculateInterval, calculateTotals, ProcessData } from '../../Calculations/CalculationsFrecuencyTables';
import { ProcessInput } from './../../../utilities/ProcessInput';
import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

function Calculator() {
  const [grouped, setGrouped] = useState(false);
  const [RawData, setRawData] = useState('');
  const [processedData, setprocessedData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [totals, setTotals] = useState({});

  const [interval, setInteval] = useState({ value: '0' });
  const [constantInterval, setconstantInterval] = useState(0);
  const [amplitude, setAmplitude] = useState({ value: '0' });
  const [constantAmplitude, setconstantAmplitude] = useState(0);

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'table-image.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const handleChangeRawData = (e) => {
    setRawData(e.target.value);
  }
  const handleChange = (event) => {
    setGrouped(event.target.checked);
  };

  const handleChangeInterval = (e) => {
    setInteval({ value: e.target.value });
  }

  const handleChangeAmplitude = (e) => {
    setAmplitude({ value: e.target.value });
  }

  const calculate = () => {
    if (RawData.length == 0) {
      setShowError(true);
    }
    else {
      setprocessedData(ProcessData(ProcessInput(RawData), grouped));
      if (grouped) {
        setAmplitude({ value: calculateAmplitud(ProcessInput(RawData)).toString() });
        setInteval({ value: calculateInterval(ProcessInput(RawData).length).toString() });
        setconstantInterval(calculateInterval(ProcessInput(RawData).length));
        setconstantAmplitude(calculateAmplitud(ProcessInput(RawData)));
      }
    }
  }

  useEffect(() => {
    setTotals(calculateTotals(processedData));
    return () => { }
  }, [processedData]);

  useEffect(() => {
    setprocessedData(ProcessData(ProcessInput(RawData), grouped, true, Number(interval.value), Number(amplitude.value)));
    return () => { }
  }, [interval.value, amplitude.value]);
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
          <Button color="secondary" variant="outlined" onClick={calculate}>Calcular</Button>
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
      <Button className="" type="button" color="primary"  variant="outlined" onClick={onButtonClick}>Descargar Tabla Como PNG</Button>
  
      <TableContainer component={Paper} ref={ref} style={{backgroundColor: "white"}} className="py-4">
        {
          grouped ? (<>
            <Grid container spacing={4} direction="row" className="px-3" alignItems="center">
              <Grid item>
                <Typography component="div" variant="inherit" >Para los Parámetros: </Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant="standard"
                  type="number"
                  label="Intervalos"
                  InputProps={{ inputProps: { min: constantInterval - 1, max: constantInterval + 1 } }}
                  value={interval.value}
                  onChange={handleChangeInterval}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="standard"
                  type="number"
                  label="Amplitud"
                  InputProps={{ inputProps: { min: constantAmplitude - 1, max: constantAmplitude + 1 } }}
                  value={amplitude.value}
                  onChange={handleChangeAmplitude}
                />
              </Grid>
              <Grid item className=" p-1 d-flex align-items-end justify-content-end m-0 m-auto">
              <Stack>
                <Typography component="span" className="fs-6 fw-bold" variant="overline"> By StatCJ </Typography>
                <Typography component="span" variant="body1"> https://statcj.vercel.app </Typography>
              </Stack>
              </Grid>
            </Grid>
          </>
          ) : null
        }
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
                <TableCell align="right">{row.acumuladoAbsoluta}</TableCell>
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