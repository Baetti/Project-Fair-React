import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
  let reqconfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };
  // console.log(reqconfig);
  return await axios(reqconfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
