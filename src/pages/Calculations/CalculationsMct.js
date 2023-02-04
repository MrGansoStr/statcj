import { redondeo } from "./CalculationsFrecuencyTables";

export const CalculateMedia = (Data) => {
  let sum = 0;
  Data.forEach(element => {
    sum += element;
  })
  return (redondeo(sum/(Data.length)));
}

export const CalculateModa = (Data) => {
  let tempRawData = new Set(Data);
  let DataWithouthRep = [...tempRawData];
  let arrTimes = [];
  for(let i = 0; i < DataWithouthRep.length; i++){
    let obj = {
      num: DataWithouthRep[i],
      times: Data.filter(element => (element === DataWithouthRep[i])).length
    };
    arrTimes.push(obj);
  }
  let [ TheMax ] = arrTimes.sort(modeSortFalling);
  return TheMax.num;
}

export const CalculateMediana = (Data) => {
  Data.sort(modeSortUpward);
  let Mediana = 0;
  let sizeRawData = Data.length;
  if(sizeRawData % 2 !== 0){
    Mediana = Data[((sizeRawData+1)/2)];
  }
  else {
    Mediana = (Data[sizeRawData/2] + Data[((sizeRawData/2) - 1)])/2; 
  }
  return redondeo(Mediana, 4);
}

export const CalculateAllMCT = (Data) => {
  const Media = CalculateMedia(Data);
  const Moda = CalculateModa(Data);
  const Mediana = CalculateMediana(Data);
  return {Media: Media, Moda: Moda, Mediana: Mediana};
} 

const modeSortFalling = (a, b) =>{
  return Number(b.times) - Number(a.times);
}

const modeSortUpward = (a, b) => {
  return Number(a) - Number(b);
}