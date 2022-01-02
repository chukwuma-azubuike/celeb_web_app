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
  small?: boolean;
  medium?: boolean;
  margin?: string;
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
  small,
  medium,
  margin,
  onClick,
}: Props) {

  return (
    <button
      className={`
        py-3 rounded-lg font-medium text-xl font-sans shadow-xl h-14 box-border
        ${secondary ? "text-transparent bg-clip-text bg-gradient-to-r from-lightPurple to-purple" : "text-white"} 
        ${secondary ? "bg-transparent border-purple" : "bg-buttonGradient border-none"}
        ${!disabled && "hover:opacity-80"} ${disabled && "opacity-25"} ${small && 'text-sm h-fit w-fit py-2 px-3'}
        ${width ? width : "w-full"} ${className} ${margin}
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
