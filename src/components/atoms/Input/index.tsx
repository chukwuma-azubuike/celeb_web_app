import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Close, Search } from "@mui/icons-material";
import { styled } from "@mui/material";
import { ThemeColors } from "../../../utils/Theme";

const CustomInput = styled(OutlinedInput)({
  "& label.Mui-focused": {
    color: ThemeColors.primaryPurple,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-input": {
    "& fieldset": {
      borderColor: ThemeColors.primaryPurple,
    },
    "&:hover fieldset": {
      borderColor: ThemeColors.primaryPurple,
    },
    "&.Mui-focused fieldset": {
      borderColor: ThemeColors.primaryPurple,
    },
  },
});

interface State {
  email: string;
  password: string;
  placeholder: string;
  search: string;
  showPassword: boolean;
}

interface Props {
  search?: boolean;
  password?: boolean;
  email?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  password,
  email,
  placeholder,
  search,
  error,
  helperText,
  onChange,
}: Props) {
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    placeholder: "",
    search: "",
    showPassword: false,
  });

  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      if (prop === "password") onChange && onChange(event);
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {search && (
        <TextField
          //   label="With normal TextField"
          //   id="search"
          sx={{ width: "100%" }}
          placeholder="Search"
          value={searchValue}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <Search />{" "}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                <Close
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setSearchValue("");
                  }}
                />{" "}
              </InputAdornment>
            ),
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
            onChange && onChange(event);
          }}
        />
      )}
      {placeholder && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            {placeholder}
          </InputLabel>
          <CustomInput
            id="outlined-adornment-placeholder"
            label={placeholder}
            type="text"
            value={values.placeholder}
            onChange={handleChange("placeholder")}
            error={error}
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      )}
      {password && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <CustomInput
            id="outlined-adornment-password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            error={error}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      )}
      {email && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <CustomInput
            id="outlined-adornment-email"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            error={error}
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      )}
    </Box>
  );
}
