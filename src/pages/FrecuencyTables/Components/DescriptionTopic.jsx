import { Box, Paper, Typography } from "@mui/material";
import { TablesFrecuencyDescription } from "../../../Descriptions/FrecuencyTables/descriptions";
import { MathComponent, useMathJax } from "mathjax-react";

function DescriptionTopic() {
  return (
    <>
      <Box component="div" className="p-4">
        <Typography variant="h6">
          {TablesFrecuencyDescription.fullInfo}
        </Typography>
        <Typography component="p" variant="body1" className="py-1 mt-2">
          {TablesFrecuencyDescription.parts.range}
        </Typography>
        <Typography component="p" variant="body1" className="py-1 mt-2">
          {TablesFrecuencyDescription.parts.AbsoluteFrecuency}
        </Typography>
        <Typography component="p" variant="body1" className="py-1 mt-2">
          {TablesFrecuencyDescription.parts.AbsoluteFrecuencyCumulative}
        </Typography>
        <Typography component="p" variant="body1" className="py-1 mt-2">
          {TablesFrecuencyDescription.parts.RelativeFrecuency}
        </Typography>
        <Typography component="p" variant="body1" className="py-1 mt-2">
          {TablesFrecuencyDescription.parts.RelativeFrecuencyCumulative}
        </Typography>
      </Box>
    </>
  );
}
export default DescriptionTopic;