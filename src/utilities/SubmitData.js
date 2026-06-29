const SubmitData = async (AxiosCall = () => Promise) => {
  try {
    let result = await AxiosCall;
    return result;
  } catch (error) {
    return;
  }
};
export default SubmitData;
