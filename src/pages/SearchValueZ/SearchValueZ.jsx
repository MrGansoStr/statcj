
import { Box, Button, Paper, Stack, TextField, Typography, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, TablePagination } from '@mui/material';
import { useState, useEffect } from 'react';
import { ProcessInputTextDecimals } from '../../utilities/ProcessInput';
import { CalculateValueZ, ReadValuesZ } from '../Calculations/CalculationsSearchZ';

import HeadValuesZ from './Components/HeadValuesZ';
const initialStateValuesZ = [
  { valueZ: 1.5, values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
];
function SearchValueZ() {
  const [valuesZ, setValuesZ] = useState(initialStateValuesZ);
  const [valueToSearch, setValueToSearch] = useState("");
  const [resultZ, setResultZ] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleClickCalculate = (e) => {
    setResultZ(CalculateValueZ(Number(valueToSearch)));
  }

  const handleChangeZ = (e) => {
    setValueToSearch(e.target.value);
  }

  useEffect(() => {
    let ValuesOfZ = [];
    fetch('/valuesZ.txt')
      .then(res => res.text())
      .then(content => {
        let lines = content.split(/\n/);
        lines.forEach(line => {
          let arrValues = ProcessInputTextDecimals(line);
          let tempobj = {
            valueZ: arrValues[0],
            values: arrValues.filter((element, index) => index != 0)
          };
          ValuesOfZ.push(tempobj);
        });
        return ValuesOfZ;
      })
      .then(vals => setValuesZ(vals));
    return () => { }
  }, [])
  return (
    <Box component="div" className="p-2 mt-2">
      <Typography variant="h3" className="py-4 d-flex align-items-center justify-content-center">Tabla Z</Typography>
      <TableContainer className="container" sx={{ maxHeight: 550 }}>
        <Table sx={{ minWidth: 65 }} size="small" stickyHeader aria-label="Table Z">
          <TableHead>
            <TableRow>
              <HeadValuesZ />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              valuesZ.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((element, i) => (
                <TableRow key={i} >
                  {
                    <TableCell className="text-center border">
                      {element.valueZ.toFixed(2)}
                    </TableCell>
                  }
                  {
                    element.values?.map((e, index) => (
                      <TableCell key={index} className="border text-center">{e.toFixed(5)}</TableCell>
                    ))
                  }
                </TableRow>

              ))
            }
            <TableRow>
              <HeadValuesZ />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div" className="container">
        <TablePagination
          className="align-items-end justify-content-end"
          rowsPerPageOptions={[15, 25, 35, 45, 55, 100]}
          component="div"
          count={valuesZ.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
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
export default SearchValueZ;