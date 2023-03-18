
const SubmitData = async (AxiosCall = () => Promise ) => {
  try {
    let result = await AxiosCall;
    //console.log("El resultado desde SubmitForm", result);
    return result;
  } catch (error) {
    console.error(error)
    return;
  }
}
export default SubmitData;