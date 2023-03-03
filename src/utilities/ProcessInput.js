
export const ProcessInput = (rawData) => {
  let newRawData = rawData.replace(/[^\.\d+?]/g, " ");
  let arrFinalData = newRawData.split(' ').map(Number);
  return arrFinalData;
}

export const ProcessInputTextDecimals = (LineString) => {
  let newLineString = LineString.replace(/^\d*(\.\d{1})?\d{10,30}$/, ",");
  let FinalLine = newLineString.split(",").map(Number);
  let FinalLine1 = LineString.split(",").map(Number);
  return FinalLine1;
}