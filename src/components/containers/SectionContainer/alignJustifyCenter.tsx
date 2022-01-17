import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean | string | string[];
}

export default function AlignJustifyCenter({ children }: Props) {
  return <div className="flex justify-between items-center">{children}</div>;
}
