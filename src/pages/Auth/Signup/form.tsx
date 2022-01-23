import React from "react";
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

export default function SignupForm() {
  const {
    values,
    helperText,
    error,
    processing,
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

  const handleButtonState = () => {
    if (Object.values(error).indexOf(true) > -1) return true;
    else if (!Object.values(error).indexOf(false)) return false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | undefined) => {
    event?.preventDefault();
    setProcessing(true);
    setTimeout(() => setProcessing(false), 5000);
    // let response = await Api.get("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="First Name"
        onChange={handleChange("name")}
        required
        helperText={helperText.name}
        error={error.name}
      />
      <Input
        placeholder="Your Birthday"
        onChange={handleChange("birthday")}
        type="date"
        helperText={helperText.birthday}
        error={error.birthday}
        required
      />
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
      <Input
        confirmPassword
        onChange={handleChange("confirmPassword")}
        helperText={helperText.confirmPassword}
        error={error.confirmPassword}
      />
      <Button type="submit" disabled={handleButtonState()} loading={processing}>
        Create your account
      </Button>
      <div className="flex justify-center mt-4">
        <Text small tone="300" light className="mr-1">
          Already have an account?
        </Text>
        <TextLink small url="/login" bold tone="300">
          Sign in
        </TextLink>
      </div>
      <div className="flex justify-between items-centre">
        <CheckBox required />
        <Text small light className="w-5/6 mt-2">
          {`By creating an account you agree to ${APP_DATA.appName}'s Terms of service,
          including Additional terms, and Privacy policy.`}
        </Text>
      </div>
    </form>
  );
}
