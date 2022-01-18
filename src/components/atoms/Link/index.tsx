import React from "react";
import { ChildrenText } from "../../../interface";

export default function Link({
  children,
  large,
  medium,
  small,
  xSmall,
  light,
  bold,
  tone,
  url,
  blank,
  className,
}: ChildrenText) {
  switch (tone) {
    case "100":
      tone = "text-primaryGrey-100";
      break;
    case "200":
      tone = "text-primaryGrey-200";
      break;
    case "300":
      tone = "text-primaryGrey-300";
      break;
    case "400":
      tone = "text-primaryGrey-400";
      break;
    default:
      break;
  }

  return (
    <a
      className={`
      text-base my-2 dark:text-white no-underline ${className} 
      ${large && "text-lg"} ${medium && "text-base"} ${small && "text-sm"} ${xSmall && "text-xs"}
      ${light && "font-light"} ${bold && "font-bold"}
      ${tone ? tone : "decoration-primaryGrey-400"}
      `}
      href={url}
      target={blank ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}
