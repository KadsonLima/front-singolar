import axios from "axios";
// process.env.REACT_APP_API_BASE_URL
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default instance;
