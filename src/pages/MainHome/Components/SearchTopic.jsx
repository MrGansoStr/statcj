import { Container, List, ListItemButton, Paper, Stack, TextField, Typography, DialogContent, Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../models/routes";
import { AllTopics } from "../../../models/Topics";

function SearchTopic() {
  const [topic, setTopic] = useState("");
  const navigate = useNavigate();
  let ListTopics = AllTopics;

  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  }

  const GoToTopic = (e, _url) => {
    e.preventDefault();
    navigate(`/${PublicRoutes.TOPICS}/${_url}`);
  }
  
  return (
    <Container maxWidth="lg" fixed className="p-4">
        <Stack spacing={3} className="d-flex align-items-center justify-content-center">
          <Typography variant="h5">Buscar Temas</Typography>
          <TextField
            variant="standard"
            placeholder="Varianza"
            color="secondary"
            label="Tema"
            className="w-50"
            type="search"
            onChange={handleChangeTopic}
          />
          <Paper elevation={1} className="w-75 ">
            <List dense className="overflow-scroll" style={{maxHeight: "200px"}} >
              {
                topic.length === 0 ? (
                  <ListItemButton className="text-center align-items-center justify-content-center" onClick={event => GoToTopic(event, "variance")}>Varianza</ListItemButton>
                ) : ListTopics.filter(e => {
                  if (topic === "") {
                    return e.name;
                  }
                  else {
                    if (e.name.toLowerCase().includes(topic.toLowerCase())) {
                      return e.name;
                    }
                  }
                  return 0;
                }).map((element, index) => (
                  <ListItemButton key={index} onClick={event => GoToTopic(event, element.url)} className="text-center align-items-center justify-content-center">
                    {element.name}
                  </ListItemButton>
                ))
              }
            </List>
          </Paper>
        </Stack>
      </Container>
  );
}
export default SearchTopic;