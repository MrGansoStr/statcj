import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, FormControlLabel, Stack, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function createData(
  name, calories, fat, carbs, protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function FrecuencyTables() {
  const [grouped, setGrouped] = useState(false);

  const handleChange = (event) => {
    setGrouped(event.target.checked);
    console.log("cambiado");
  };
  return (
    <Box component="div" className="container-xl py-4" >
      <Typography variant="h4">Tabla de Frecuencias</Typography>
      <Stack component="div" spacing={2} className="d-flex align-items-center justify-content-center m-0 m-auto py-5 w-75">
        <Typography component="div" variant="overline" className="fs-6">Ingrese sus Datos separados por una coma (,):</Typography>
        <TextField
          type="text"
          id="standard-multiline-flexible"
          label="Datos"
          multiline
          maxRows={15}
          fullWidth
          variant="standard"
          className="w-75"
        />
        <Box component="span" className="">
          <Button color="success" variant="outlined">Calcular</Button>
        </Box>
        <FormControlLabel control={
            <Switch
              checked={grouped}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label={`${grouped ? 'Datos AGRUPADOS' : 'Datos NO AGRUPADOS'}`} />
      </Stack>

      <TableContainer component={Paper} className="py-4">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="Frecuency Table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default FrecuencyTables; 