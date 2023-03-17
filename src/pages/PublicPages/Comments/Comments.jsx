import { memo } from "react";
import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { lazy } from "react";
const BoxComments = lazy(() => import("./Components/BoxComments"));


const Comments = memo(() => {
  useEffect(() => {
    
    return () => {}
  },[])
  return (
    <Box component="div" className="container-lg mt-5 mb-5">
      <Typography variant="h4" className="text-center">Comentarios y Discuciones</Typography>
      <Container maxWidth="md">
        <BoxComments/>
      </Container>
    </Box>
  );
});
export default Comments;