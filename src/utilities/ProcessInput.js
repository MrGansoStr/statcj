
export const ProcessInput = (rawData) => {
  let newRawData = rawData.replace(/[^0-9]+/g, " ");
  let arrFinalData = newRawData.split(' ').map(Number);
  return arrFinalData;
}