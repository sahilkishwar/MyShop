import axios from "axios";

// Make sure the URL matches your backend
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default API;
