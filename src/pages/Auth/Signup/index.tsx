import React from "react";
import Button from "../../../components/atoms/Button";
import Divider from "../../../components/atoms/Divider";
import Header from "../../../components/atoms/Header";
import Text from "../../../components/atoms/Text";
import Section from "../../../components/containers/SectionContainer";
import APP_DATA from "../../../data/index.data";
import LoginForm from "./form";

export default function Signup() {
  return (
    <Section authWidth>
      <div className=" ">
        <Header className=" w-42" bold>
          Welcome to {APP_DATA.appName}{" "}
        </Header>
        <Text className="w-56" tone="300" light>
          Book personalized video shoutouts from your favourite stars
        </Text>
      </div>
      <div>
        <Button background="bg-facebookBlue" className=" mb-2 ">
          Continue with Facebook
        </Button>
        <Divider width="w-100">Or continue with email</Divider>
        <LoginForm />
      </div>
    </Section>
  );
}
