import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { AlertTitle, Typography } from '@mui/material';

function StyledErrorInput({show, HideError}) {

  return (
    <Box component="div" className="d-flex align-items-center justify-content-center">
      <Collapse in={show}>
        <Alert
          className="p-3"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={HideError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Error</AlertTitle>
          <Typography className="fw-bold" variant="inherit">Los datos no están correctamente ingresados. </Typography>
          <Typography className="fw-bold" variant="inherit">Por favor, Reviselos e inténtelo de nuevo.</Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}

export default StyledErrorInput;