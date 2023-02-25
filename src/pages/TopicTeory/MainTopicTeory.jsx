import { Box } from "@mui/material";
import { TopicsRoutes } from "../../models/routes";
import RedirectBox from "../../StyledComponents/RedirectBox/RedirectBox";

function MainTopicTeory() {
  return (
    <Box component="div" className="container-lg">
      <RedirectBox _height={"25rem"} _route={TopicsRoutes.MEDIA} _title={"Media"} />
      <RedirectBox _height={"25rem"} _route={TopicsRoutes.MEDIANA} _title={"Mediana"} />
      <RedirectBox _height={"25rem"} _route={TopicsRoutes.MODA} _title={"Moda"} />
      <RedirectBox _height={"25rem"} _route={TopicsRoutes.VARIANCE} _title={"Varianza"} />
      <RedirectBox _height={"25rem"} _route={TopicsRoutes.ERROR} _title={"ERROR"} />  
    </Box>
  );
}
export default MainTopicTeory;