
import { Outlet } from "react-router-dom";
import BackPageButton from "../BackPageButton/BackPageButton";
import { Box } from '@mui/material';

function GoHomePath() {
  return (
    <>
      <Box component="div" className="container-lg p-3">
        <BackPageButton />
      </Box>
      <Outlet />
    </>
  );
}
export default GoHomePath;