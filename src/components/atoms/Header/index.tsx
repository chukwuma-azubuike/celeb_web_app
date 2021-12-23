import React from "react";
import { ChildrenText } from "../../../interface";

export default function Header({ children }: ChildrenText) {
  return <h1 className="my-2">{children}</h1>;
}
