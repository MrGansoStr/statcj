import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import StyledErrorInput from "../../../../StyledComponents/StyledErrorInput/StyledErrorInput";
import UseComment from './../../../../Hooks/UseComment';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';

function BoxAction({ showAction = false, HideAction, TypeAction = "answer", InfoComment}) {
  const { showError, HideError, EditComment, MakeAnswer } = UseComment();
  return (
    <Collapse in={showAction}>
      <form>
        <FormGroup>
          <TextField
            color="secondary"
            type="text"
            multiline
            rows={4}
            defaultValue="Comentario"
          />
          {
            showError ? <Box component="div" className="p-3"><StyledErrorInput show={showError} HideError={HideError} /></Box> : null
          }
          <FormControl className="p-3 align-items-end">
            {TypeAction === "edit" ? (
              <Box alignItems="end" className="p-2">
                <Button onClick={HideAction} type="button" color="error" variant="outlined" sx={{ maxWidth: 170 }}>Cancelar</Button>
                &nbsp;
                <Button onClick={event => EditComment(event, InfoComment)} type="button" color="primary" variant="outlined" sx={{ maxWidth: 170 }}>Editar Comentario</Button>
              </Box>
            ) : (
              <Box alignItems="end" className="p-2">
                <Button onClick={HideAction} type="button" color="error" variant="outlined" sx={{ maxWidth: 170 }}>Cancelar</Button>
                &nbsp;
                <Button onClick={event => MakeAnswer(event, InfoComment)} type="button" color="primary" variant="outlined" sx={{ maxWidth: 170 }}>Responder Comentario</Button>
              </Box>
            )}
            {/*
            <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={HideAction}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
            */}
          </FormControl>
        </FormGroup>
      </form>
    </Collapse>

  )
}
export default BoxAction;