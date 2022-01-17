import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
  classNames?: string;
  authWidth?: boolean;
}

export default function Section({ children, classNames, authWidth }: Props) {
  return (
    <div className={`p-4 m-auto ${classNames} ${authWidth && "max-w-md"}`}>
      {children}
    </div>
  );
}
