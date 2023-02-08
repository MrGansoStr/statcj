
import { Box, Divider, Grid } from '@mui/material';
import { UseContextSymbols } from '../ContextSearchSymbols';
import { SymbolsDescriptions } from './../../../Descriptions/SearchSymbols/SymbolsDescriptions';
import BoxSymbol from './BoxSymbol';

const gridItem = {
  margin: "0.45rem",
};

function Symbols() {
  let ListSymbols = SymbolsDescriptions;
  let { wordToSearch } = UseContextSymbols();
  return (
    <Box component="div" className="p-3 mt-2 ">
      <div className="d-block"><br /><br /></div>
      <Grid container spacing={2} direction="row" justifyContent="center" className="p-0" alignItems="stretch" >
        {ListSymbols.filter((val) => {
          if (wordToSearch === "") {
            return val.name
          }
          if ((val.name.toLowerCase()).includes(wordToSearch.toLowerCase())) {
            return val.name
          }
          return 0
        }).map((element, index) => (
          <Grid item className="p-0 h-100" sx={gridItem} md={2} key={index} >
              <BoxSymbol key={index} _idSymbol={element.idSymbol} _urlSymbol={element.UrlSymbol} _name={element.name} _Description={element.Description} />
          </Grid>
        ))}
        {/*
          ListSymbols.map((element, index) => (
            <Grid item className="p-0 h-100" sx={gridItem} md={2} key={index} >
              <BoxSymbol key={index} _urlSymbol={element.UrlSymbol} _name={element.name} _Description={element.Description} />
            </Grid>
          ))
          */
        }
      </Grid>
    </Box>
  );
}
export default Symbols;