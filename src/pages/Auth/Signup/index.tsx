import React from "react";
import Button from "../../../components/atoms/Button";
import Divider from "../../../components/atoms/Divider";
import SubHeader from "../../../components/atoms/SubHeader";
import Text from "../../../components/atoms/Text";
import Page from "../../../components/containers/PageContainer";
import APP_DATA from "../../../data/index.data";
import SignupForm from "./form";

export default function Signup() {
  return (
    <Page noPreloader authWidth pad>
      <div className=" ">
        <SubHeader className=" w-42" bold>
          Welcome to {APP_DATA.appName}{" "}
        </SubHeader>
        <Text className="w-56" tone="300" light>
          Book personalized video shoutouts from your favourite stars
        </Text>
      </div>
      <div>
        <Button background="bg-facebookBlue" className=" mb-2 ">
          Continue with Facebook
        </Button>
        <Divider width="w-100">Or continue with email</Divider>
        <SignupForm />
      </div>
    </Page>
  );
}
