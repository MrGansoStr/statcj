
const compareNumbers = (a, b) => {
  return a - b;
}

export const redondeo = (val, _cifras = 4) =>{
 let cifras = Math.pow(10, _cifras);
 return Math.round((val + Number.EPSILON) * cifras) / cifras; 
}

const calcularK = (n) => {
  let k = Math.log10(n);
  return k;
}

export const ProcessData = (_inputData, _grouped = false) => {
  let RawDataGrouped;
  let DataGrouped = [];
  let max;
	let min;
  let range;
  let interval;
	let amplitude; 
  if(_inputData.length == 0){
    return console.log("Size 0");
  }
  if(_grouped) {
    RawDataGrouped = _inputData;
    max =  Math.max(...RawDataGrouped);
    min = Math.min(...RawDataGrouped);
    range = max - min;
    if(RawDataGrouped.length > 25){
      interval = parseInt(Math.sqrt(RawDataGrouped.length)); // K
    }
    else {
      let tempInterval = 1 + (3.322 * Math.log10(RawDataGrouped.length));
      interval = parseInt(tempInterval); // k Sturges
      if(interval % 2 == 0){
        interval = interval + 1;
      }
    }
    amplitude = parseInt(range / interval)+1; // A
    let newRange = interval * amplitude;
    let CorreccionDeIntevalo = parseInt((newRange - range)/2);
    min = min-CorreccionDeIntevalo;
    max = max+CorreccionDeIntevalo;
    if(min < 0.00000) {
      min = 0;
    }
    let acumuladorAbsoluta = 0;
    let acumuladorRelativa = 0;
    for(let i = 0; i < interval; i++) {
      let _veces = RawDataGrouped.filter(element => (element >= min && element < (min + amplitude))).length;
      let _relativa = (_veces/RawDataGrouped.length);
      acumuladorAbsoluta += _veces;
      acumuladorRelativa += _relativa;
      let obj = {
        rowid: i,
        minimo: min,
        maximo: min + amplitude,
        marcaDeClase: ((min + (min + amplitude)) / 2),
        veces: _veces,
        acumuladoAbsoluta: acumuladorAbsoluta,
        frelativa: redondeo(_relativa, 4),
        acumuladoRelativa: redondeo(acumuladorRelativa, 4),
        porcentual: redondeo((_relativa*100), 4),
        acumuladoPorcentual: redondeo((acumuladorRelativa*100), 4)
      }
      min = amplitude + min
      DataGrouped.push(obj)
      obj = {}
    }
    return DataGrouped;
  }
  else {
    RawDataGrouped = _inputData;
    let DataGrouped = [];
    let temp = new Set(RawDataGrouped);
    let DataWithouthRep = [...temp];
    DataWithouthRep.sort(compareNumbers);
    let acumuladorAbsoluta = 0;
    let acumuladorRelativa = 0;

    for(let i = 0; i < DataWithouthRep.length; i++){
      let _veces = RawDataGrouped.filter(element => (element == DataWithouthRep[i])).length;
      let _relativa = (_veces/RawDataGrouped.length);
      acumuladorAbsoluta += _veces;
      acumuladorRelativa += _relativa;
      let obj = {
        rowid: i,
        XI: DataWithouthRep[i],
        minimo: 0,
        maximo: 0,
        marcaDeClase: 0,
        veces: _veces,
        acumuladoAbsoluta: acumuladorAbsoluta,
        frelativa: redondeo(_relativa, 4),
        acumuladoRelativa: redondeo(acumuladorRelativa, 4),
        porcentual: redondeo((_relativa*100 ), 4),
        acumuladoPorcentual: redondeo((acumuladorRelativa*100 ), 4)
      }
      min = amplitude + min
      DataGrouped.push(obj)
      obj = {}
    }

    return DataGrouped;
  }
}

export const calculateTotals = (_inputData) => {
  let sumaAbsoluta = 0;
  let sumaRelativa = 0.0;
  let sumaPorcentualRelativa = 0.0;

  for(let i = 0; i < _inputData.length; i++){
    sumaAbsoluta += _inputData[i].veces;
    sumaRelativa += parseFloat(_inputData[i].frelativa);
    sumaPorcentualRelativa += parseFloat(_inputData[i].porcentual);
  }

  return {sumaAbsoluta: sumaAbsoluta, sumaRelativa: redondeo(sumaRelativa, 4), porcentualRelativa: redondeo(sumaPorcentualRelativa, 4)};
}