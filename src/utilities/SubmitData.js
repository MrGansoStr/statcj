const SubmitData = async (AxiosCall = () => Promise) => {
  try {
    const result = await AxiosCall;
    return result;
  } catch {
    return;
  }
};
export default SubmitData;
