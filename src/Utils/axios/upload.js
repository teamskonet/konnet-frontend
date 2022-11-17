import Axios from "axios";

const REACT_APP_SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
console.log("HOST", REACT_APP_SERVER_HOST);

let baseURL;
if (REACT_APP_SERVER_HOST) {
  baseURL = `${REACT_APP_SERVER_HOST}/`;
} else {
  const host = "https://loftywebtech.com/gotocourse/api/v1/file/upload";
  baseURL = `${host}/`;
}

const AxiosUpload = async (requestObj) => {
  const { path, method, data, version = "v1" } = requestObj;

  // const token = localStorage.getItem("authToken");
  // console.log('lofty token: ', token)

  const headers = {
    "Content-Type": "multipart/form-data",
  };

  const url = version ? `${baseURL}${version}/${path}/65e00162-92a2-403c-885d-e5f5742ebdb5` : `${baseURL}${path}`;

  console.log("url",url)
  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data;

    return result;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      localStorage.setItem("authToken", "");
      window.location.href = "/signin";
    }
    throw error;
  }
};

export default AxiosUpload;