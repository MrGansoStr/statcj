
import { redondeo } from './CalculationsFrecuencyTables';
import { ProcessInputTextDecimals } from './../../utilities/ProcessInput';
const funcionDensidadZAcumulado = (x) => { // for media 0 and desviacion 1
  return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-((x * x) / 2));
}

export const CalculateValueZ = (valZ, media = 0, desv = 1) => {
  let sup = valZ, inf = -5.0;
  let area = 0.0;
  //cout<< "llegue" << endl;
  let dx = 0.000001;
  for (let i = inf; i < sup; i += dx) {
    area += dx * funcionDensidadZAcumulado(i);
  }
  //cout<< setprecision(10) << (1/sqrt(2*PI))*area << endl;
  //console.log(area);
  return redondeo(area, 5);
}

export const CalculateAllValuesZ = () => {
  let ValuesZ = [];
  let counteri = 0;
  for (let i = -3; i <= 3; i += 0.1) {
    let counterj = 0;
    let tempArray = [];
    for (let j = 0; j <= 0.09; j += 0.01) {
      tempArray.push(CalculateValueZ(i + j));
      counterj++;
      //cout<< setprecision(7) << CalculateValueZ(i+j) << "\t";
    }
    ValuesZ.push(tempArray);
    counteri++;
  }
  console.log(ValuesZ);
}

export const ReadValuesZ = async () => {
  try {
    const response = await fetch('/valuesZ.txt')
    const content = await response.text();
    const FormatedData = await ProcessTextValues(content);
    return FormatedData;
  } catch (error) {
    console.log("Ha ocurrido un error al procesar la solicitud");
  }

}

const ProcessTextValues = async (content) => {
  let ValuesOfZ = [];
  let lines = content.split(/\n/);
  lines.forEach(line => {
    let arrValues = ProcessInputTextDecimals(line);
    let tempobj = {
      valueZ: arrValues[0],
      values: arrValues.filter((element, index) => index != 0)
    };
    ValuesOfZ.push(tempobj);
  });
  return ValuesOfZ;
}
