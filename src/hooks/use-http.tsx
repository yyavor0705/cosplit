import {useState} from "react";

export interface IHttpRequestData {
  url: string;
  method?: string;
  body?: BodyInit | null;
  onSuccess?: () => {};
  onError?: () => {};
}

const useHttp = () => {
  const [requestInProgress, setRequestInProgress] = useState(false)
  
  const safeCallback = (callback = () => {}) => {
    if(callback) {
      callback();
    }
  }
  
  // const sendRequest = async (url: string, method?: string | undefined, body = null, onSuccess = () => {}, onError = () => {}) => {
  const sendRequest = async (requestData: IHttpRequestData) => {
    setRequestInProgress(true);
    try {
      const response = await fetch(requestData.url,
        {
          method: requestData.method || "GET",
          body: requestData.body
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        safeCallback(requestData.onError);
      } else {
        safeCallback(requestData.onSuccess);
      }
    } catch (error) {
      console.log(error);
      safeCallback(requestData.onError);
    } finally {
      setRequestInProgress(false);
    }
  }
  
  return {
    requestInProgress,
    sendRequest
  };
}

export default useHttp;