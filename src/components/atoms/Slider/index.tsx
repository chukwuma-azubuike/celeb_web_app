import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeColors } from "../../../utils/Theme";

const PrettoSlider = styled(Slider)({
  color: ThemeColors.primaryGrey,
  opacity: 50,
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    backgroundImage: ThemeColors.primaryGradient,
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: `2px solid purple`,
    "&:focus, &:hover": {
      boxShadow: `0 0 0 5px ${ThemeColors.transparentGrey}`,
    },
    "&.Mui-active, &.Mui-focusVisible": {
      boxShadow: `0 0 0 10px ${ThemeColors.transparentGrey}`,
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: ThemeColors.primaryGrey,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

interface Props {
  label?: string;
  onChange?: (
    event: Event,
    value: number | Array<number>,
    activeThumb: number
  ) => void;
}

export default function CustomizedSlider({ label, onChange }: Props) {
  return (
    <Box>
      <Typography gutterBottom>{label}</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={50}
        onChange={onChange}
      />
    </Box>
  );
}
