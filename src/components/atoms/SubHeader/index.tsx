import React from "react";
import { ChildrenText } from "../../../interface";

export default function SubHeader({
  children,
  bold,
  light,
  tone,
  className,
}: ChildrenText) {
  return (
    <h2
      className={`my-2 dark:text-white ${className}
      ${bold && "font-bold"} ${light && "font-light"} 
      ${tone === "100" && "text-primaryGrey-100"} 
      ${tone === "200" && "text-primaryGrey-200"}
      ${tone === "300" && "text-primaryGrey-300"} 
      ${tone === "400" && "text-primaryGrey-400"}
      `}
    >
      {children}
    </h2>
  );
}
