import { CalculateMedia, CalculateMediaGrouped } from './CalculationsMct';
import { ProcessData, redondeo } from './CalculationsFrecuencyTables';

export const CalculateVariance = (Data, _muestral = true) => {
  let media = CalculateMedia(Data);
  let sum = 0;

  Data.forEach(element => {
    sum += Math.pow((element - media), 2);
  })

  let varianza = redondeo(sum / (_muestral ? Data.length - 1 : Data.length), 4);
  return varianza;

}

export const CalculateVarianceGrouped = (Data, _muestral = false) => {
  let MediaAgrupada = CalculateMediaGrouped(Data);
  let DataTable = ProcessData(Data, true);
  let sumatoria = 0;
  let sumaVeces = 0;

  DataTable.forEach(element => {
    sumatoria += Math.pow((element.marcaDeClase - MediaAgrupada), 2) * element.veces;
    sumaVeces += element.veces;
  })

  let VarianzaAgrupada = sumatoria / (_muestral ? (sumaVeces - 1) : sumaVeces);
  return redondeo(VarianzaAgrupada, 4); 
}

export const CalculateStandarError = (Variance) => {
  let Error = Math.sqrt(Variance);
  return redondeo(Error, 4);
}

export const CalculateVarianceAndError = (Data, _grouped = false, _muestral = false) => {
  const Varianza = _grouped ? CalculateVarianceGrouped(Data, _muestral) : CalculateVariance(Data, _muestral);
  const Error = CalculateStandarError(Varianza);
  return { varianza: Varianza, error: Error };
}