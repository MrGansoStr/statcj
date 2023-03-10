import { Typography, Box, Paper, Button } from '@mui/material';
import { useState } from 'react';
import { UserModelInComment } from '../../../../models/InitialUser';
import UseComment from './../../../../Hooks/UseComment';
import { useTheme } from '@mui/material';
import BoxAction from './BoxAction';

function Comment({ InfoComment, showMore = false }) {

  const [infoUser, setInfoUser] = useState(UserModelInComment);
  const theme = useTheme();
  const { showAction, typeAction, HideShowAction, ChangeShowAction } = UseComment();
  return (
    <Box component="div" className="mx-3 mt-2 p-3 border rounded-2">
      {InfoComment?.idComment}
      <Typography variant="h6">
        {infoUser.name}
      </Typography>
      <Typography component="div" variant="body1" className="p-2">
        {InfoComment?.comment}&nbsp;
        <Typography>
          Likes: {InfoComment?.numberLikes} &nbsp; Dislikes: {InfoComment?.numberDislikes} &nbsp; {JSON.stringify(InfoComment?.timeComment)}
        </Typography>
      </Typography>

      {
        InfoComment?.childComments?.map((e, index) => (
          <Comment key={index} InfoComment={e} />
        ))
      }
      {
        showAction ? <BoxAction showAction={showAction} HideAction={HideShowAction} InfoComment={InfoComment} TypeAction={typeAction} /> : null
      }
      {
        <Box component="div" className="d-flex alig-items-end justify-content-end p-2">
          <a onClick={event => ChangeShowAction(event, "answer")} type="button" style={{ color: theme.palette.text.secondary }}>Responder</a>&nbsp;&nbsp;
          <a onClick={event => ChangeShowAction(event, "edit")} type="button" style={{ color: theme.palette.text.secondary }}>Editar</a>
        </Box>
      }
      {
        /*showMore ? 'ver más' : null*/
      }
    </Box>
  );
}
export default Comment