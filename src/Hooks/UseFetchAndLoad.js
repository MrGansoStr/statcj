import { useEffect, useState } from "react";

const UseFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller = AbortController;
  const CallEndpoint = async (AxiosCall) => {
    if(AxiosCall.controller) controller = AxiosCall.controller;
    setLoading(true);
    let result = {};
    try {
      result = await AxiosCall.CallEndpoint;
    } catch (error) {
      setLoading(false);
      throw error;
    }
    setLoading(false);
    return result;
  }

  const CancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  }

  useEffect(() => {
    return () => {
      CancelEndpoint();
    }
  }, []);

  return { loading, CallEndpoint };
}
export default UseFetchAndLoad;