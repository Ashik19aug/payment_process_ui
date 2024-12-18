import axios from "axios";
export const RequestPostAPI = async (formData, config) => {

  let axiosConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'multipart/form-data',
      'Accept' : 'multipart/form-data',
      'Authorization' : 'Bearer test',
      'action': 'submitCheckoutDummy',
      'apiUrl': '/api/v1/submitCheckoutDummy',
      'sendOtp' : 'application/json',
      'deviceId' : 'DEVICE_01229911223',
      'googleAdId' : 'GOOGLE0909323',
      'subscriptionId' : 'SUBSCRIBE090932',
      'userAgent' : 'getUA',
      'browserName' : 'browserName',
      'browserVersion' : 'browserVersion',
      'simId' : 'SIM321122111',
      'osPlatform' : 'osName',
      'deviceType' : 'deviceType',
      'imeiNo' : '950345832533',
    }
  };
  axiosConfig.headers = {...axiosConfig.headers,...config};

  const result = await axios.post('https://dev-signup-api.sslcommerz.com/api/v1/endpoint', formData, axiosConfig)
    .then((res) => {
      // console.log('---', res)
      if(res.data.code === 200){
        return res;
      } else if(res.data.code === 422){
        return res;
      } else if(res.data.code === 401){
        return res;
      }
    })
    .catch((err) => {
      return err;
    })
  return result;
};