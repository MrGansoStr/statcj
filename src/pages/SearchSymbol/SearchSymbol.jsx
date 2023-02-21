
import { Box, Typography } from '@mui/material';
import SearchEngine from './Components/SearchEngine';
import Symbols from './Components/Symbols';
import { lazy, useState } from 'react';
import { ContextSymbols, UseContextSymbols } from './ContextSearchSymbols';
import BackPageButton from '../../StyledComponents/BackPageButton/BackPageButton';
const CustomizedDialogs = lazy(() => import('./Components/ExtraInfoBoxSymbol'));

function SearchSymbol() {
  return (
    <Box component="div" className="p-3 mt-3 container-lg">
    <Box component="div" className="p-3">
        <BackPageButton />
      </Box>
    <Typography className="d-flex align-items-center justify-content-center" variant="h5">Buscar Símbolo</Typography>
      <ContextSymbols>
        <SearchEngine />
        <Symbols />
        <CustomizedDialogs/>
      </ContextSymbols>
    </Box>
  );
}
export default SearchSymbol;