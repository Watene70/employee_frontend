
import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export default axios;
