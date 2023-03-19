import { Box, Button, FormControl, FormGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UseComment from "../../../../Hooks/UseComment";
import UseFetchAndLoad from "../../../../Hooks/UseFetchAndLoad";
import { GetCommentsAPI } from "../../../../services/public.service";
import StyledErrorInput from "../../../../StyledComponents/StyledErrorInput/StyledErrorInput";
import { useAsync } from './../../../../Hooks/UseAsync';
import { CommentsModelMain } from './../../../../models/CommentsModel';
import Comment from "./Comment";


function BoxComments({ ArrayComments = [] }) {
  const { loading, CallEndpoint } = UseFetchAndLoad();
  const { showError, msgError,HideError, MakeComment, ChangeComment } = UseComment();
  const [data, setData] = useState(null);
  const getApiData = async () => await CallEndpoint(GetCommentsAPI());
  useAsync(getApiData, (a) => setData(a.data), () => { });
  //let listComments = data;
  const userState = useSelector(store => store.user);
  const [userIdLogged, setUserIdLogged] = useState(null);
  const [isLogged, setLogged] = useState(false);
  useEffect(() => {
    console.log("rendered");
    if(Object.keys(userState).length > 1){
      setLogged(true);
      setUserIdLogged(userState?.idUser);
    }
    else{
      setLogged(false);
    }
  }, []);
  return (
    <>
      <Box component="div" className="container p-5">
        <form onSubmit={MakeComment}>
          <FormGroup>
            <TextField
              color="secondary"
              type="text"
              multiline
              rows={7}
              defaultValue="Comentario"
              onChange={ChangeComment}
            />
            {
              showError ? <Box component="div" className="p-3"><StyledErrorInput show={showError} HideError={HideError} Message={msgError} /></Box> : null
            }
            <FormControl className="p-3 align-items-end">
              <Button type="submit" color="primary" variant="contained" sx={{ maxWidth: 170 }}>Comentar</Button>
            </FormControl>
          </FormGroup>
        </form>
      </Box>
      <div>
      </div>
      <div className="container">
        {loading ? <Typography variant="h6">Cargando...</Typography> : (
          data?.map((e, index) => (
            <Comment key={index} InfoComment={e} isLogged={isLogged} idUserLogged={userIdLogged}/>
          ))
        )}
      </div>

    </>
  );
}
export default BoxComments;