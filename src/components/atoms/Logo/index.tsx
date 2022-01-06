import React from "react";
import logoTextColor from "../../../assets/svg/logo_text_color.svg";

interface Props {
  variant?:
    | "logo_text_color"
    | "logo_text_black"
    | "logo_text_white"
    | "logo_color"
    | "logo_black"
    | "logo_white"
    | "text_color"
    | "text_black"
    | "text_white";
  size?: "lg" | "md" | "sm" | "w-44" | "w-32" | "w-20";
  ClassName?: string;
}
export default function Logo({ variant, size, ClassName }: Props) {
  switch (size) {
    case "lg":
      size = "w-44";
      break;
    case "md":
      size = "w-32";
      break;
    case "sm":
      size = "w-20";
      break;
    default:
      break;
  }

  return (
    <img
      className={`${ClassName} ${size ? size : "w-32"}`}
      alt="logo"
      src={variant === "logo_text_color" ? logoTextColor : logoTextColor}
    />
  );
}
