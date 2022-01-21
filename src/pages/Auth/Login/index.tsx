import React from "react";
import Button from "../../../components/atoms/Button";
import Divider from "../../../components/atoms/Divider";
import SubHeader from "../../../components/atoms/SubHeader";
import Text from "../../../components/atoms/Text";
import Page from "../../../components/containers/PageContainer";
import APP_DATA from "../../../data/index.data";
import LoginForm from "./form";

interface Props {
  status?: string;
}
export default function Login({ status, ...props }: Props) {
  return (
    <Page noPreloader authWidth pad>
      <div className=" ">
        <SubHeader className=" w-42" bold>
          Login to {APP_DATA.appName}{" "}
        </SubHeader>
        <Text className="w-56" tone="300" light>
          Pick up from where you left{" "}
        </Text>
      </div>
      <div>
        <Button background="bg-facebookBlue" className=" mb-2 ">
          Continue with Facebook
        </Button>
        <Divider width="w-100">Or continue with email</Divider>
        <LoginForm />
      </div>
    </Page>
  );
}
