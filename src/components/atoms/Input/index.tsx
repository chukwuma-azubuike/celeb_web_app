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
  date?: string;
}

interface Props {
  required?: boolean;
  search?: boolean;
  password?: boolean;
  confirmPassword?: boolean;
  email?: boolean;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  password,
  confirmPassword,
  email,
  type,
  placeholder,
  search,
  error,
  helperText,
  required,
  onChange,
}: Props) {
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    placeholder: "",
    date: "2000-01-01",
    search: "",
    showPassword: false,
  });

  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        margin: "16px auto",
      }}
    >
      {search && (
        <TextField
          //   label="With normal TextField"
          //   id="search"
          sx={{ width: "100%" }}
          placeholder="Search..."
          value={searchValue}
          inputProps={{ steps: 100 }}
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
          <InputLabel
            shrink={type === "date" ? true : undefined}
            htmlFor={`${placeholder}`}
          >
            {placeholder}
          </InputLabel>
          <CustomInput
            required={required}
            id={`outlined-adornment-${placeholder}`}
            label={placeholder}
            type={type || "text"}
            value={type === "date" ? values.date : values.placeholder}
            onChange={
              type === "date"
                ? handleChange("date")
                : handleChange("placeholder")
            }
            error={error}
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      )}
      {confirmPassword && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <CustomInput
            required
            id="outlined-adornment-confirm-password"
            label="Confirm Password"
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
      {password && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <CustomInput
            required
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
            required
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
      {/* {date && (
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <CustomInput
            id="outlined-adornment-date"
            label="Email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            error={error}
          />
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </FormControl>
      )} */}
    </Box>
  );
}
