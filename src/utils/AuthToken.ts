import React from "react";

export function getStoredAuthToken() {
  return localStorage.getItem("token") || "token";
}

export function removeStoredAuthToken() {
  return localStorage.removeItem("token");
}
