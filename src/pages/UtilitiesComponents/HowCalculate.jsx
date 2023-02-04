import { Box, FormControlLabel, Paper, Switch } from "@mui/material";

function HowCalculate({grouped, handleChangeGrouped, muestral, handleChangeMuestral}) {
  return (
    <Box component={Paper} className="p-4">
      <FormControlLabel control={
        <Switch
          checked={grouped}
          onChange={handleChangeGrouped}
          inputProps={{ 'aria-label': 'controlled' }}
        />} label={`${grouped ? 'Datos AGRUPADOS' : 'Datos NO AGRUPADOS'}`} />
      <FormControlLabel control={
        <Switch
          checked={muestral}
          onChange={handleChangeMuestral}
          inputProps={{ 'aria-label': 'controlled' }}
        />} label={`${muestral ? 'Para una Muestra' : 'Para una Población'}`} />
    </Box>
  );
}
export default HowCalculate;