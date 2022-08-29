import React from "react";
import "./index.css";

interface Prop {
  children: JSX.Element | JSX.Element[];
  id: string;
  className?: string;
}

export default function ScrollableContainer({ children, ...props }: Prop) {
  return (
    <div
      id={props.id}
      className={`flex overflow-auto whitespace-nowrap  w-full scroll-smooth scroll-menu ${props.className}`}
    >
      {children}
    </div>
  );
}
