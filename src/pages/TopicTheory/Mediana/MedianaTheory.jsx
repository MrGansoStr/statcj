import { Box, Typography } from "@mui/material";
import { MathComponent } from 'mathjax-react';

function MedianaTheory() {
  return (
    <Box component="div" className="container-lg">
      <Typography variant="h4" className="text-center p-4">
        Mediana
      </Typography>
      <Typography>
        La mediana es un valor que divide a un conjunto de observaciones ordenads en forma ascendente o descendente en dos grupos de igual número de observaciones. La notación que vamos a emplear será:
      </Typography>
      <Typography component="div" variant="body1">
        <MathComponent tex={String.raw`Med(x) = mediana`} />
      </Typography>
      <Typography variant="body1">
        En el cálculo de la mediana, podemos considerar los 3 casos siguientes:
      </Typography>
      <Typography component="div" variant="body1">
        <b>Caso 1: </b>&nbsp;&nbsp;
        La variable en estudio es discreta y en &#40;número de observaciones es impar. En este caso, la mediana será el valor de la variable que ocupa la posición media rango de orden &nbsp;
        <MathComponent tex={String.raw`\frac{n+1}{2}`} display={false} />
        &#41;.
      </Typography>
      <Typography></Typography>
    </Box>
  );
}
export default MedianaTheory;