import { Typography, Box, Button, DialogContent } from '@mui/material';
import UseComment from './../../../../Hooks/UseComment';
import { useTheme } from '@mui/material';
import BoxAction from './BoxAction';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import GetGender from '../Utilities/GetGender';
import { IsEditable } from '../Utilities/CanEdit';
import { BootstrapDialog, BootstrapDialogTitle, Transition } from './../../../SearchSymbol/Components/ExtraInfoBoxSymbol';

function Comment({ InfoComment, isLogged = false, idUserLogged }) {
  let date = new Date(Date.parse(InfoComment?.timeComment)).toLocaleDateString();
  let hours = new Date(Date.parse(InfoComment?.timeComment)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const theme = useTheme();
  const { showAction, typeAction, ModalDelete, HideModalDelete, OpenModalDelete, DeleteComment, HideShowAction, ChangeShowAction } = UseComment();

  return (
    <Box component="div" className="mx-3 mt-2 p-3 border rounded-2">
      {InfoComment?.idComment}
      <Typography component="div" variant="body1" className="fs-bold">
        {GetGender(InfoComment?.Usuario?.gender)}{InfoComment?.Usuario?.name} {InfoComment?.Usuario?.lastName}
      </Typography>
      <Typography component="div" variant="body1" className="p-2">
        {InfoComment?.comment}&nbsp;
        <Typography>
          <ThumbUpOutlinedIcon color="secondary" /> {InfoComment?.numberLikes} &nbsp; <ThumbDownOffAltOutlinedIcon color="secondary" /> {InfoComment?.numberDislikes} &nbsp; {hours} &nbsp; {date}
        </Typography>
      </Typography>
      {
        <Box component="div" className="d-flex alig-items-end justify-content-end p-2">
          <a onClick={event => ChangeShowAction(event, "answer")} type="button" style={{ color: theme.palette.text.secondary }}>Responder</a>&nbsp;&nbsp;
          {
            isLogged && IsEditable(idUserLogged, InfoComment?.userId) ? (
              <>
                <a onClick={event => ChangeShowAction(event, "edit")} type="button" style={{ color: theme.palette.info.main }}>Editar</a>&nbsp;
                <a onClick={OpenModalDelete} type="button" style={{ color: theme.palette.error.main }}>Eliminar</a>
              </>
            ) : null
          }
        </Box>
      }
      {
        ModalDelete ?
          (
            <BootstrapDialog
              aria-labelledby="Modal-Delete"
              onClose={HideModalDelete}
              open={ModalDelete}
              TransitionComponent={Transition}
            >
              <BootstrapDialogTitle onClose={HideModalDelete} id="customized-dialog-title" >
                <Typography className="fs-4 mx-4" >
                  ¿Seguro que desea eliminar el comentario?
                </Typography>
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Box component="div" className="container row align-items-center justify-content-center">
                  <Box component="div" className="col-4 mx-3">
                    <Button onClick={HideModalDelete} variant="contained" color="info">Cancelar</Button>
                  </Box>
                  <Box component="div" className="col-4 mx-3">
                    <Button onClick={event => DeleteComment(event, InfoComment)} type="button" variant="contained" color="error">Eliminar</Button>
                  </Box>
                </Box>
              </DialogContent>
            </BootstrapDialog>
          ) : (null)
      }
      {
        showAction ? <BoxAction showAction={showAction} HideAction={HideShowAction} InfoComment={InfoComment} TypeAction={typeAction} /> : null
      }
      {
        InfoComment?.Comments?.map((e, index) => (
          <Comment key={index} InfoComment={e} isLogged={isLogged} idUserLogged={idUserLogged} />
        ))
      }
      {
        /*showMore ? 'ver más' : null*/
      }
    </Box>
  );
}
export default Comment