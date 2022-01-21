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
  plain?: boolean;
  small?: boolean;
  medium?: boolean;
  margin?: string;
  background?: string;
  type?: "button" | "reset" | "submit";
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
  plain,
  medium,
  margin,
  background,
  onClick,
}: Props) {
  return (
    <button
      className={`
        py-2 rounded-lg font-medium text-lg font-sans shadow-xl box-border
        ${
          secondary
            ? "text-transparent bg-clip-text bg-gradient-to-r from-lightPurple to-purple"
            : "text-white"
        } 
        ${
          secondary
            ? "bg-transparent border-purple"
            : background
            ? background
            : plain
            ? "bg-primaryGrey-200 bg-transparent border-none"
            : "bg-buttonGradient border-none"
        }
        ${!disabled && "hover:opacity-80"} ${disabled && "opacity-25"} ${
        small && "text-sm h-fit w-fit py-2 px-3"
      }
        ${width ? width : "w-full"} ${className} ${margin}
        ${!disabled && "cursor-pointer"} 
      `}
      onClick={onClick}
      disabled={loading || disabled}
      type={type}
    >
      {loading ? (
        <CircularProgress size={20} style={{ color: secondary ? "purple" : "inherit" }} />
      ) : (
        children
      )}
    </button>
  );
}
