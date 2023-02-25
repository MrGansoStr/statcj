import { Box, TextField } from "@mui/material";
import { UseContextSymbols } from "../ContextSearchSymbols";

function SearchEngine() {

  let { wordToSearch, setWordToSearch } = UseContextSymbols();

  const handleChangeNameSymbol = (e) => {
    setWordToSearch(e.target.value);
  }

  return (
   <Box component="div" className="d-flex justify-content-center align-items-center p-2">
   {/*
      <TextField
        className="w-75"
        type="text"
        variant="standard"
        maxRows={1}
        fullWidth
        label="Nombre del simbolo"
        onChange={handleChangeNameSymbol}
      />
   */}
      <TextField
        className="w-50"
        type="text"
        variant="standard"
        maxRows={1}
        fullWidth
        label="Nombre del simbolo"
        onChange={handleChangeNameSymbol}
      />
    </Box>
  );
}
export default SearchEngine;