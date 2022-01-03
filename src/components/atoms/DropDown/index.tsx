import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { dimension } from "../../../utils/Theme";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Props {
  handleChange?: () => void;
  menuLabel: string;
  menuList?: any;
  menuId: string;
  disabled?: boolean;
}

export default function DropDown({
  //   handleChange,
  menuLabel,
  menuList,
  menuId,
  disabled,
}: Props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: '100%', height: dimension.inputHeight }}>
        <InputLabel id={menuId}>{menuLabel}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //   multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          disabled={disabled}
        >
          {menuList.map((menuItem: any) => (
            <MenuItem
              key={menuItem}
              value={menuItem}
              style={getStyles(menuItem, personName, theme)}
            >
              {menuItem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
