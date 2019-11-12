import axios from "axios";
import { getToken } from "../utils/utils";
import { Message } from "element-ui";

let timeout1 = null;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 100000, // 请求超时时间.
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json"
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers["Authorization"] = `${getToken()}`; // 让每个请求携带token
    }
    if (config.data) {
      if (config.data.page) {
        config.headers["pageNum"] = config.data.page.pageNum;
        config.headers["pageSize"] = config.data.page.pageSize;
        if (config.data.page.orderBy) {
          config.headers["orderBy"] = config.data.page.orderBy;
        }
        delete config.data["page"];
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response;
    if (res) {
      if (res.status === 200) {
        if (res.data && res.data.code && res.data.code !== "10000") {
          Message.error(res.data && res.data.msg);
        }
      }
      return response;
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 415:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        default:
          error.message = "连接错误" + error.response.status;
      }
      // Message.error(error.message)
      if (timeout1) clearTimeout(timeout1);
      timeout1 = setTimeout(() => {
        Message.error(error.message);
      }, 500);
    }
    return Promise.reject(error);
  }
);

export default {
  get: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    let get = function(requrl, data) {
      if (data) {
        requrl = requrl + "/" + data;
      }
      return service.get(requrl);
    };
    return get(requrl, data);
  },
  post: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    return service.post(requrl, data);
  },
  put: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    return service.put(requrl, data);
  },
  delete: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    return service.delete(requrl, { data });
  },
  upload: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    let config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return service.post(requrl, data, config);
  },
  download: function(baseUrl, url, data) {
    const requrl = `${baseUrl}${url}`;
    let config = {
      responseType: "arraybuffer"
    };
    return service.post(requrl, data, config);
  }
};
