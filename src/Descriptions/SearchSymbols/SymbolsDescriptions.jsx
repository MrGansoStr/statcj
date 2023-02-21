import { MathComponent } from "mathjax-react";
import MediaInfos from "./ExtraInfos/MediaInfos";

export const SymbolsDescriptions = [
  {
    idSymbol: 1,
    name:"Media",
    UrlSymbol: <MathComponent tex={String.raw`\bar x = \frac{1}{N} \sum_{i=1}^N (x_i)`}/>,
    Description: "Es la suma de todos los xi dividido entre el n (el numero total de datos).",
    ExtraInfos: <MediaInfos/>
  },
  {
    idSymbol: 2,
    name: "Ro",
    UrlSymbol: <MathComponent tex={String.raw`\int_0^1 x^2\ dx`}/>,
    Description: "Es un simbolo usado para calcular las combinaciones posibles."
  },
  ,{
    idSymbol: 3,
    name:"Varianza",
    UrlSymbol: <MathComponent tex={String.raw`\sigma ^2 = \frac{\sum_{i=1}^N (x_i - \bar x)^2}{N}`}/>,
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  },{
    name:"Varianza",
    UrlSymbol: "url's Symbol",
    Description: "Simbolo de la varianza"
  }
];