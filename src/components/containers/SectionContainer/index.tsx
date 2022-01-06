import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
}

export default function Section({ children }: Props) {
  return <div className="p-4">{children}</div>;
}
