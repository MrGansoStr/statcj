import { Box, Button, FormControl, FormGroup, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import UseComment from "../../../../Hooks/UseComment";
import UseFetchAndLoad from "../../../../Hooks/UseFetchAndLoad";
import StyledErrorInput from "../../../../StyledComponents/StyledErrorInput/StyledErrorInput";
import { useAsync } from './../../../../Hooks/UseAsync';
import { CommentsModelMain } from './../../../../models/CommentsModel';
import Comment from "./Comment";


function BoxComments({ ArrayComments = [] }) {
  const { loading, CallEndpoint } = UseFetchAndLoad();
  const { showError, HideError, MakeComment } = UseComment();
    const [data, setData] = useState(null);
    const getApiData = async () => await CallEndpoint();
    useAsync(getApiData, (a) => setData(a.data), () => { });
  //let listComments = data;
  useEffect(() => {
    console.log("rendered");
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
            />
            {
              showError ? <Box component="div" className="p-3"><StyledErrorInput show={showError} HideError={HideError} /></Box> : null
            }
            <FormControl className="p-3 align-items-end">
              <Button type="submit" color="primary" variant="contained" sx={{ maxWidth: 170 }}>Comentar</Button>
            </FormControl>
          </FormGroup>
        </form>
      </Box>
      <div>{ /*loading ? (
        <Typography variant="h3">Loading</Typography>
      ) : (
        <>
          <div className="container">
            <img src={data?.image} />
          </div>
        </>
      )*/}
      </div>
      <div className="container">
      {loading ? <Typography variant="h6">Cargando...</Typography>: (
        data?.map((e, index) => (
          <Comment key={index} InfoComment={e} showMore={true} />
        ))
      )}
      </div>

    </>
  );
}
export default BoxComments;