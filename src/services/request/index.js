import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (config.method === "post") {
          const contentType = config.headers["Content-Type"];
          if (
            !contentType ||
            contentType.indexOf("multipart/form-data") === -1
          ) {
            config.headers["Content-Type"] = "application/json";
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }

  put(config) {
    return this.request({ ...config, method: "put" });
  }

  delete(config) {
    return this.request({ ...config, method: "delete" });
  }
}

const service = new Request(BASE_URL, TIMEOUT);

export default service;
