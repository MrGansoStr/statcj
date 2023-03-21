import { Box, Typography } from "@mui/material";
import { MathComponent } from 'mathjax-react';

function ModaTheory() {
  return (
    <Box component="div" className="container-lg mt-5 py-5">
      <Typography className="text-center" variant="h4">Moda</Typography>
      <Typography variant="body1">
        Dada una distribución de frecuencias; la moda denotada por <b>X - No</b>, es un valor de la variable que tiene la más alta frecuente, esto es, es el valor más frecuenta de la distribución. La moda no siempre existe y no siempre es única.
      </Typography>
      <br />
      <Typography component="div" variant="body1">
        <MathComponent tex={String.raw`Mo = moda`} />
      </Typography>
      <Typography variant="body1">
        <b>
          Propiedades de la Moda:
        </b>
      </Typography>
      <Typography>
        1&nbsp;&#41; El valor de la moda es totalmente independiente de los valores extremos.
      </Typography>
      <Typography>
        2&nbsp;&#41; La moda es una medida inestable porque varia si se cambia el intervalo de clase.
      </Typography>
      <Typography>
        3&nbsp;&#41; Su significación es limitado cuando se dispone de un gran número de valores.
      </Typography>
      <Typography>
        4&nbsp;&#41; Es el valor típico, y por ello el promedio más descriptivo.
      </Typography>
      <Typography>
        5&nbsp;&#41; La moda no se presta a manipulaciones algebracias posteriores.
      </Typography>
      <Typography>
        <b>Ejemplo: </b>&nbsp;&nbsp;
        Considere la distribución de los pesos de 15 adultos 63, 67, 70, 69, 81, 57, 63, 73, 68, 63, 71, 71, 71, 83. El valor 63 y 71 ocurren 3 veces, y el resto ocurre una vez cada uno. Luego la moda de estas observaciones es:
      </Typography>
      <Typography component="div" variant="body1">
        <MathComponent tex={String.raw`Mo = 63`} display={false} />
        &nbsp;kilos &nbsp; y &nbsp;
        <MathComponent tex={String.raw`Mo = 63`} display={false} />
        &nbsp;kilos
      </Typography>
    </Box>
  );
}
export default ModaTheory;