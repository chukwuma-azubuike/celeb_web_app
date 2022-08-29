import React from "react";
import axios from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "./AuthToken";
import { toast } from "react-toastify";
// import history from "browserHistory";
// import "";
// import { objectToQueryString } from "shared/utils/url";
// require("dotenv").config();

const defaults = {
  baseURL: process.env.BASE_URL,
  headers: () => ({
    "Content-Type": "application/json",
    // Authorization: "token", // getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

const api = (
  method: "get" | "GET" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "delete" | "DELETE",
  url: string,
  variables?: string
) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
      timeout: 30000,
      timeoutErrorMessage:
        "Something went wrong. Please check your internet connection or contact our support.",
      //   paramsSerializer: objectToQueryString,
    }).then(
      (response) => resolve(response),
      (error) => {
        if (error.response) {
          if (error.response.data.error.code === "INVALID_TOKEN") {
            removeStoredAuthToken();
            // history.push("/authenticate");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

// const optimisticUpdate = async (url, { updatedFields, currentFields, setLocalData }) => {
//   try {
//     setLocalData(updatedFields);
//     await api("put", url, updatedFields);
//   } catch (error) {
//     setLocalData(currentFields);
//     toast.error(error);
//   }
// };

export default {
  get: (...args: [string, string?]) => api("get", ...args),
  post: (...args: [string, string?]) => api("post", ...args),
  put: (...args: [string, string?]) => api("put", ...args),
  patch: (...args: [string, string?]) => api("patch", ...args),
  delete: (...args: [string, string?]) => api("delete", ...args),
  //   optimisticUpdate,
};
