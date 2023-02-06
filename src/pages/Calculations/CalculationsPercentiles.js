import { ProcessData, redondeo } from "./CalculationsFrecuencyTables";

const isInteger = (num) => {
  let newNum = num.toString();
  if(newNum.includes('.')){
    return false;
  }
  else{
    return true;
  }
}

const extractDecimal = (num) => {
  let tempINT = parseInt(num);
  return parseFloat(num - tempINT);
}

const NearPosition = (Data, _toSearch) => {
  let distance = 0;
  let position = 0;
  for(let i = 0; i < Data.length; i++) {
    if((_toSearch - Data[i].acumuladoAbsoluta) < distance ){
      distance = (_toSearch - Data[i].acumuladoAbsoluta);
    }
    else{
      position = i;
      break;
    }
  }
  return position;  
}

//25.6
/*
3 - 25.6 = -22.6 < 0 d = -22.6
8 - 25.6 = -17.6 < -22.6 d = -17.6
17 - 25.6 = -8.6 < -17.6 d = -8.6
24 - 25.6 = -1.6 < -8.6 d = -1.6
29 - 25.6 = 4.6 < -8.6 d = break
32 - 25.6 = 

*/

const CalculatePercentil = (Data, _k) => {
  Data.sort();
  const Position = (_k*(Data.length + 1))/100;
  let Percentil = 0;
  if(isInteger(Position)){
    Percentil = Data[Position];
  }
  else{
    let NewPosition = parseInt(Position);
    let dec = redondeo(extractDecimal(Position),4);
    //console.log(Data[NewPosition], Data[NewPosition-1]);
    Percentil = Data[NewPosition - 1] + ((Data[NewPosition] - Data[NewPosition - 1]) * dec);
  }
  return Percentil;
}

const CalculatePercentilGrouped = (Data, _k) => {
  const TableData = ProcessData(Data, true);
  let theN = 0;
  TableData.forEach(element => {
    theN += element.veces;
  })
  let ForFindPosition = (_k * theN) / 100;
  let Position = NearPosition(TableData, ForFindPosition);
  let LimiteInferior = TableData[Position].minimo;
  let TamanioIntervalo = TableData[Position].maximo - TableData[Position].minimo;
  const Percentil = LimiteInferior + ((TamanioIntervalo*(ForFindPosition - TableData[(Position === 0 ? 0 : Position - 1 )].acumuladoAbsoluta))/TableData[Position].veces);
  //console.log(theN, ForFindPosition, Position, LimiteInferior, TamanioIntervalo, Percentil);
  return redondeo(Percentil, 4);
}

export const CalculateAllPercentil = (Data, _k, _grouped = true) => {
  const Percentil = _grouped ? CalculatePercentilGrouped(Data, _k) : CalculatePercentil(Data, _k);
  const Numk = _k;
  return {numk: Numk, percentil: Percentil}
}