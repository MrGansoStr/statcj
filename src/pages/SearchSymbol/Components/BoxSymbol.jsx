import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { SymbolsDescriptions } from "../../../Descriptions/SearchSymbols/SymbolsDescriptions";
import { UseContextSymbols } from "../ContextSearchSymbols";

function BoxSymbol({_name ="a", _urlSymbol = "b", _Description = "c", _idSymbol = 0}) {
  let { setOpenInfo, setIdSymbol, setInfoSymbol} = UseContextSymbols();
  let ListSymbols = SymbolsDescriptions;
  const SSymbol = (symbolid) =>{
    let InfoSymbol = ListSymbols.find(element => {
      return element?.idSymbol === symbolid;
    })
    return InfoSymbol;
  }
  
  const handleOpenInfo = (e) => {
    setInfoSymbol(SSymbol(_idSymbol));
    setIdSymbol(_idSymbol);
    setOpenInfo(true);
  }

  return (
    <Box component="div" >
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }}  gutterBottom>
            {_name}
          </Typography>
          <Typography variant="inherit" sx={{ mb: 1.5 }} >
            {_urlSymbol}
          </Typography>
          <Typography variant="body2">
            {_Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpenInfo} type="button" variant="outlined" size="small">Ver más</Button>
        </CardActions>
      </Card>
    {/*
    */}
    </Box>
  );
}
export default BoxSymbol;