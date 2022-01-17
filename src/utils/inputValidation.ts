import React from "react";
import validate from "./strings/validate.json";

export function inputPropTypeWithRegExp(prop: string) {
  switch (prop) {
    case "name":
      return {
        type: RegExp(validate.name),
        error: "Name must have at least 4 aplhanumeric characters",
      };
    case "birthday":
      break;
    case "email":
      return {
        type: RegExp(validate.email),
        error: "Email must be in correct format",
      };
    case "password":
      return {
        type: RegExp(validate.weak_password),
        error: "Password must have at least 8 Characters",
      };
    case "confirmPassword":
      return {
        type: RegExp(validate.weak_password),
        error: "Password mismatch, please confirm.",
      };
    default:
      break;
  }
}
