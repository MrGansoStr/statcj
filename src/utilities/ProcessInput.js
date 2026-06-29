export const ProcessInput = (rawData) => {
  const newRawData = rawData.replace(/[^\.\d+?]/g, " ");
  const arrFinalData = newRawData.split(" ").map(Number);
  return arrFinalData;
};

export const ProcessInputTextDecimals = (LineString) => {
  const newLineString = LineString.replace(/^\d*(\.\d{1})?\d{10,30}$/, ",");
  const FinalLine = newLineString.split(",").map(Number);
  const FinalLine1 = LineString.split(",").map(Number);
  return FinalLine1;
};
