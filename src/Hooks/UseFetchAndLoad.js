import { useEffect, useState } from "react";
import axios from 'axios';

const UseFetchAndLoad = () => {
  
  const [loading, setLoading] = useState(false);
  let controller = new AbortController;
  const signal = controller.signal;

  const CallEndpoint = async (url = "") => {
    setLoading(true);
    let result = {};
    try {
      result = await axios.get('https://rickandmortyapi.com/api/character/2', { signal: signal }, controller);
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