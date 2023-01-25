import { Box, Typography } from "@mui/material";

function RedirectBox({ _height, _title, _info }) {
  const style = {
    height: _height
  }
  return (
    <div className="border container d-flex align-items-center fustify-content-center p-3" style={style}>

      <Box component="div" className="row">
        <Typography variant="h3">{_title}</Typography>
        <Typography varian="body1">{_info}</Typography>
      </Box>

    </div>
  );
}
export default RedirectBox;

