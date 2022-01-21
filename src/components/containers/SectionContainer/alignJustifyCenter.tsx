import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean | string | string[] | any;
  className?: string;
}

export default function AlignJustifyCenter({ children, className }: Props) {
  return <div className={`flex justify-between items-center ${className} `}>{children}</div>;
}
