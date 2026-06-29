import { CalculateMedia, CalculateMediaGrouped } from "./CalculationsMct";
import { ProcessData, redondeo } from "./CalculationsFrecuencyTables";

export const CalculateVariance = (Data, _muestral = true) => {
  const media = CalculateMedia(Data);
  let sum = 0;

  Data.forEach((element) => {
    sum += Math.pow(element - media, 2);
  });

  const varianza = redondeo(
    sum / (_muestral ? Data.length - 1 : Data.length),
    4,
  );
  return varianza;
};

export const CalculateVarianceGrouped = (Data, _muestral = false) => {
  const MediaAgrupada = CalculateMediaGrouped(Data);
  const DataTable = ProcessData(Data, true);
  let sumatoria = 0;
  let sumaVeces = 0;

  DataTable.forEach((element) => {
    sumatoria +=
      Math.pow(element.marcaDeClase - MediaAgrupada, 2) * element.veces;
    sumaVeces += element.veces;
  });

  const VarianzaAgrupada = sumatoria / (_muestral ? sumaVeces - 1 : sumaVeces);
  return redondeo(VarianzaAgrupada, 4);
};

export const CalculateStandarError = (Variance) => {
  const standardError = Math.sqrt(Variance);
  return redondeo(standardError, 4);
};

export const CalculateVarianceAndError = (
  Data,
  _grouped = false,
  _muestral = false,
) => {
  const Varianza = _grouped
    ? CalculateVarianceGrouped(Data, _muestral)
    : CalculateVariance(Data, _muestral);
  const standardError = CalculateStandarError(Varianza);
  return { varianza: Varianza, error: standardError };
};
