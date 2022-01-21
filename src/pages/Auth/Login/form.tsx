import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/atoms/Button";
import CheckBox from "../../../components/atoms/CheckBox";
import Input from "../../../components/atoms/Input";
import TextLink from "../../../components/atoms/Link";
import Text from "../../../components/atoms/Text";
import APP_DATA from "../../../data/index.data";
import useHandleAuthForm from "../../../hooks/Auth";
import { AuthFormState } from "../../../interface";
import Api from "../../../utils/Api";
import { inputPropTypeWithRegExp } from "../../../utils/inputValidation";

export default function LoginForm() {
  const {
    values,
    checked,
    helperText,
    error,
    processing,
    setChecked,
    setValues,
    setHelperText,
    setError,
    setProcessing,
  } = useHandleAuthForm();

  const handleChange =
    (prop: keyof AuthFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      let propType = inputPropTypeWithRegExp(prop);
      if (propType?.type) {
        if (propType?.type.test(event.target.value)) {
          setError({ ...error, [prop]: false });
          setHelperText({ ...helperText, [prop]: "" });
          setValues({ ...values, [prop]: event.target.value });
        } else {
          setError({ ...error, [prop]: true });
          setHelperText({ ...helperText, [prop]: propType.error });
        }
      }
    };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleButtonState = () => {
    if (Object.values(error).indexOf(true) > 3) return false;
    else return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    setProcessing(true);
    setTimeout(() => setProcessing(false), 5000);
    let response = await Api.get("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        email
        onChange={handleChange("email")}
        helperText={helperText.email}
        error={error.email}
      />
      <Input
        password
        onChange={handleChange("password")}
        helperText={helperText.password}
        error={error.password}
      />
      <Button type="submit" disabled={handleButtonState()} loading={processing}>
        Login
      </Button>
      <div className="flex justify-center mt-2">
        <Text tone="300" light className="mr-1 my-2">
          Don't have an account?
        </Text>
        <TextLink url="/signup" bold tone="300">
          Sign up
        </TextLink>
      </div>
      <div className="flex justify-between items-centre">
        <CheckBox checked={checked} onChange={handleCheck} required />
        <Text light className="w-5/6">
          {`By logging in, you agree to ${APP_DATA.appName}'s Terms of service,
          including Additional terms, and Privacy policy.`}
        </Text>
      </div>
    </form>
  );
}
