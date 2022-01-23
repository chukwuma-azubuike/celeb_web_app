import React from "react";
import Text from "../Text";

interface Prop {
  children?: string;
  width?: string;
}

export default function Divider({ children, width }: Prop) {
  return (
    <div className=" flex justify-between items-center">
      <div className=" w-full h-0 border-1 border-b-0 border-x-0 border-solid border-primaryGrey-300 opacity-7" />
      <Text
        light
        xSmall
        className={`${children && "mx-4"} ${width} justify-self-stretch`}
      >
        {children}
      </Text>
      <div className=" w-full h-0 border-1 border-b-0 border-x-0 border-solid border-primaryGrey-300 opacity-7" />
    </div>
  );
}
