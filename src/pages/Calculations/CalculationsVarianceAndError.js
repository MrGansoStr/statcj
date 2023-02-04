import { CalculateMedia } from './CalculationsMct';
import { redondeo } from './CalculationsFrecuencyTables';

export const CalculateVariance = (Data, _grouped = false, _muestral = true) => {
  let media = CalculateMedia(Data);
  if(_grouped){
    console.log("agrupados");
  }
  else{
    let sum = 0;
    Data.forEach(element => {
      sum += Math.pow((element - media), 2);
    })
    let varianza = redondeo(sum / (_muestral? Data.length-1 : Data.length), 4);
    return varianza;
  }
}

export const CalculateError = (Variance) => {
  let Error = Math.sqrt(Variance);
  return redondeo(Error, 4);
}

export const CalculateVarianceAndError = (Data) => {
  const varianza = CalculateVariance(Data);
  const Error = CalculateError(varianza);
  return {varianza: varianza, error: Error};
}