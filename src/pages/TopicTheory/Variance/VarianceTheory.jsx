import { Box, Typography } from "@mui/material";
import { MathComponent } from 'mathjax-react';

function VarianceTheory() {
  return (
    <Box component="div" className="container">
      <Typography variant="h4" className="text-center">
        Varianza
      </Typography>
      <Typography>
        Sean:&nbsp;
        <MathComponent tex={String.raw`x_1, x_2,...,x_k`} display={false} />
        valores de la variable x, con frecuencias absolutas
        &nbsp;
        <MathComponent tex={String.raw`f_1,...,f_k`} display={false} />.
        respectivamente. La varianza muestral de x es dado por:
      </Typography>
      <Typography variant="h6">Para datos agrupados <b>&#40;muestral&#41;</b></Typography>
      <Typography component="div" variant="body1">
        <MathComponent tex={String.raw`Var[x] = S^2 = \frac{\sum_{i=1}^k f_i(x_i - \bar x)^2}{n-1} `} />
        <MathComponent tex={String.raw`= \frac{n}{n-1} \sum_{i=1}^k h_i (x_i- \bar X)^2`} />
      </Typography>
      <Typography variant="h6">
        Para Datos NO agrupados <b>&#40;muestral&#41;</b>
      </Typography>
      <Typography component="div" variant="body1">
        <MathComponent tex={String.raw`S^2= \frac{n}{n-1} \sum_{i=1}^n (x_i- \bar X)^2`} />
      </Typography>
    </Box>
  );
}
export default VarianceTheory;