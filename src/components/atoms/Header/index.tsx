import React from "react";
import { ChildrenText } from "../../../interface";

export default function Header({
  children,
  bold,
  light,
  tone,
  className,
}: ChildrenText) {
  return (
    <h1
      className={`my-2 ${className}
      ${bold && "font-bold"} ${light && "font-light"} 
      ${tone === "100" && "text-primaryGrey-100"} 
      ${tone === "200" && "text-primaryGrey-200"}
      ${tone === "300" && "text-primaryGrey-300"} 
      ${tone === "400" && "text-primaryGrey-400"}
      `}
    >
      {children}
    </h1>
  );
}
