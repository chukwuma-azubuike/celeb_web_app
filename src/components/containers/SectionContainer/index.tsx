import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
  classNames?: string;
  authWidth?: boolean;
  pad?: boolean;
}

export default function Section({ children, classNames, authWidth, pad }: Props) {
  return (
    <div className={` ${pad && "p-4"} m-auto ${classNames} ${authWidth && "max-w-md"}`}>
      {children}
    </div>
  );
}
