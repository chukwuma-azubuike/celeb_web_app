import React from "react";
import Button from "../../../components/atoms/Button";
import Header from "../../../components/atoms/Header";
import Text from "../../../components/atoms/Text";

interface Props {
  brief: string;
  header: string;
  description: string;
  onClick?: () => void;
  imageURL: string;
}

export default function WelcomeSection({ ...props }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.imageURL})` }}
      className={`w-full h-[570px] bg-no-repeat bg-center bg-cover box-border`}
    >
      <div className={`max-w-lg absolute bottom-0 p-3 md:p-6`}>
        <Text bold className=" text-pink-500 ">
          {props.brief}
        </Text>
        <Header tone="100"> {props.header} </Header>
        <Text className="hidden sm:block mb-4" tone="200">
          {props.description}
        </Text>
        <Button className="px-6 w-max">Book now</Button>
      </div>
    </div>
  );
}
