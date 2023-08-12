import axios from "axios";
import { API_BASE_URL } from "@env";

const instance = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
