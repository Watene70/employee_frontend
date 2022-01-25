import axios from "axios";

axios.defaults.baseURL = `http://localhost:5000`;

axios.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

export default axios;
