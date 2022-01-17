import React from "react";
import { AuthFormState } from "../../interface";

interface ErrorState {
  name: boolean;
  email: boolean;
  birthday: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export default function useHandleAuthForm() {
  const [values, setValues] = React.useState<AuthFormState>({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [helperText, setHelperText] = React.useState<AuthFormState>({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = React.useState<ErrorState>({
    name: false,
    email: false,
    birthday: false,
    password: false,
    confirmPassword: false,
  });

  React.useEffect(() => {
    if (values.confirmPassword !== values.password) {
      setHelperText({
        ...helperText,
        confirmPassword: "Password mismatch, please confirm.",
      });
      setError({ ...error, confirmPassword: true });
    } else {
      setHelperText({ ...helperText, confirmPassword: "" });
      setError({ ...error, confirmPassword: false });
    }
  }, [values.confirmPassword, values.password]);

  const [processing, setProcessing] = React.useState<boolean>(false);

  return {
    values,
    helperText,
    error,
    processing,
    setValues,
    setHelperText,
    setError,
    setProcessing,
  };
}
