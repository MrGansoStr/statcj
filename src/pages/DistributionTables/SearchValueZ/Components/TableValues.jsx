import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { memo } from "react";
import { useState } from "react";
import HeadValuesZ from "./HeadValuesZ";

const TableValues = memo(({ valuesZ }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
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
          labelRowsPerPage={"Filas Por Páginas"}
          rowsPerPageOptions={[15, 25, 35, 45, 55, 100]}
          component="div"
          count={valuesZ.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
});
export default TableValues;