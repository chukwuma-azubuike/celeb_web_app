import React, { MouseEventHandler } from "react";

interface Props {
  active: boolean;
  disabled?: boolean;
  label: JSX.Element | string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  id: string;
}

export default function Chip({ active, disabled, label, onClick, id }: Props) {
  return (
    <div
      id={id}
      className={`py-2 px-5 rounded-full border-none text-white w-fit mr-2
      ${active ? "bg-buttonGradient" : "bg-gray-300"}
      ${
        disabled ? "opacity-30" : "cursor-pointer hover:opacity-90 bg-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
