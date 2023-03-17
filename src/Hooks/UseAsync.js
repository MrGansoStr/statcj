
import { useEffect } from 'react';
export const useAsync = (
  asyncFunction = () => Promise,
  successFunction,
  returnFunction,
  dependencies = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFunction().then((result) => {
      if (isActive) successFunction(result?.data);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
}