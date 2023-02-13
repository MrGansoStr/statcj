import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';

function RedirectBox({ _height, _title, _types, _info, _route}) {
  const theme = useTheme();
  const style = {
    height: _height
  }
  return (
    <Box component={Paper} className="container d-flex align-items-center fustify-content-center px-3 rounded-2 mt-2" style={style}>
    <Link className="nav-link  p-1" to={_route}>
      <Box component="div" className="row">
        <Typography variant="h4" className="update-view-link">
        {_title}
        <NavigateNextIcon fontSize="inherit"/>
        </Typography>
        <Typography variant="h6">{_types}</Typography>
        <Box component="div" className="p-5">
          <Typography paragraph varian="body1">{_info}</Typography>
        </Box>
      </Box>
    </Link>
    </Box>
  );
}
export default RedirectBox;

