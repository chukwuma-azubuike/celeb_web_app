import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { IOSSwitch } from "./IOSSwitch";

interface Props {
  label: string;
  defaultChecked?: boolean;
  onChange?: (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => void;
}

export function ToggleSwitch({ label, defaultChecked, onChange }: Props) {
  return (
    <FormControlLabel
      control={
        <IOSSwitch sx={{ m: 1, mr: 2 }} defaultChecked={defaultChecked} />
      }
      label={label}
      onChange={onChange}
    />
  );
}

export function DarkModeSwitch({ label, onChange }: Props) {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1, ml: 0 }} />}
      label={label}
      onChange={onChange}
    />
  );
}
