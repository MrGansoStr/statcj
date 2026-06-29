const SubmitData = async (AxiosCall = () => Promise) => {
  try {
    let result = await AxiosCall;
    return result;
  } catch {
    return;
  }
};
export default SubmitData;
