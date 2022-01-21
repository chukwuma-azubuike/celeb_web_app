import React from "react";
import { ChildrenText } from "../../../interface";

export default function Text({
  children,
  large,
  medium,
  small,
  xSmall,
  light,
  bold,
  tone,
  className
}: ChildrenText) {

  switch (tone) {
    case '100':
      tone = 'text-primaryGrey-100'
      break;
    case '200':
      tone = 'text-primaryGrey-200'
      break;
    case '300':
      tone = 'text-primaryGrey-300'
      break;
    case '400':
      tone = 'text-primaryGrey-400'
      break;
    default:
      break;
  }

  return (
    <p
      className={`
      text-base dark:text-white ${className}
      ${large && 'text-lg'} ${medium && 'text-base'} ${small && 'text-sm'} ${xSmall && 'text-xs'}
      ${light && "font-light"} ${bold && "font-bold"}
      ${tone ? tone : 'text-primaryGrey-400'}
      `}
    >
      {children}
    </p>
  );
}
