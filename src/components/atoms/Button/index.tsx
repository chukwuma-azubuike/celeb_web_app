import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  children?: JSX.Element | string;
  className?: string;
  width?: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  type?: "button" | "reset" | "submit"
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  width,
  disabled,
  loading,
  secondary,
  type,
  onClick,
}: Props) {
  return (
    <button
      className={`
        py-3 rounded-lg font-medium text-xl font-sans
        shadow-xl h-14 box-border
        ${secondary ? "text-transparent bg-clip-text bg-gradient-to-r from-lightPurple to-purple" : "text-white"} 
        ${!disabled && "hover:opacity-80"} ${disabled && "opacity-50"}
        ${secondary ? "bg-transparent border-purple" : "bg-buttonGradient border-none"}
        ${width ? width : "w-full"} ${className}
        ${!disabled && "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
    >
      {loading ? <CircularProgress size={28} style={{color: secondary ? 'purple': 'inherit'}} /> : children}
    </button>
  );
}
