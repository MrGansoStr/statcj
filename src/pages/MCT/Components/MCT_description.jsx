import { Box, Typography } from "@mui/material";
import { MCTDescription } from "../../../Descriptions/DescriptionsAllTopics/descriptions";

function MCT_description() {
  return (
    <Box component="div" className="p-3">
      <Typography variant="inherit">
        {MCTDescription.fullInfo}
      </Typography>
    </Box>
  );
}
export default MCT_description;