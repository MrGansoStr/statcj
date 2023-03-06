import { Box, Typography } from "@mui/material";
import { MathComponent } from "mathjax-react";
import '../Utilities/StylesMathJax.css';

function MediaTheory() {
  return (
    <Box component="div" className="container-lg p-3">

      <Typography variant="h4" className="text-center p-4">Media</Typography>
      <Typography variant="body1">Una Media o promedio es una medida de tendencia central. Es el resultado de la suma de un conjunto de números que fácilmente podría representar a todo el conjunto de datos.</Typography>
      <Box component="div" className="py-3">
        <Typography variant="h5">La Media Aritmética - Datos NO Agrupados</Typography>
        <Typography variant="body1">
          Sean todos los valores &nbsp;
          <MathComponent tex={String.raw`x_1, x_2,...,x_n`} display={false} />
          , valores de la variable X. La media aritmética simple de X representada por
          <MathComponent tex={String.raw`\bar X`} display={false} />
          es dado por:
        </Typography>
        <Typography variant="h4">
          <MathComponent tex={String.raw`\bar x = \frac{1}{n} \sum_{i=1}^n x_i`} />
        </Typography>
        <Typography variant="body1">donde n es el tamaño de la muestra o número de elementos del conjunto de observaciones.</Typography>
      </Box>
      <Box component="div" className="py-3">
        <Typography variant="h5">La Media Aritmética - Datos Agrupados</Typography>
        <Typography variant="body1">
          Sean todos los valores &nbsp;
          <MathComponent tex={String.raw`x_1, x_2,...,x_k`} display={false} />
          , valores de la variable X ponderados por sus respectivas frecuencias absolutas
          <MathComponent tex={String.raw`f_1,..., f_k`} display={false} />.&nbsp;
          La media de la variable x es dado por:
        </Typography>
        <Typography variant="h4">
          <MathComponent className="big-math" id="algo" tex={String.raw`\bar x = \frac{1}{n} \sum_{i=1}^k f_i*x_i`} />
        </Typography>
      </Box>
    </Box>
  );
}
export default MediaTheory;