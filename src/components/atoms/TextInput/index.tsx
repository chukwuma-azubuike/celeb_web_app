import React from "react";
import { createTheme, TextField, ThemeProvider } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";

interface Props {
  type?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  id: string;
  onChange?: () => void;
  placeholder: string;
  required?: boolean;
  value?: any;
  helperText?: string;
  theme?: () => void;
}

// const theme = createTheme({
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//           @font-face {
//             '"Open Sans", sans-serif';
//           }
//         `,
//     },
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           borderRadius: "0.5rem",
//           color: "red",
//         },
//       },
//     },
//   },
// });

export default function TextInput({ ...props }: Props) {
  return (
    // <ThemeProvider theme={theme}>
      <TextField
        // sx={{
        //   borderRadius: 8,
        // }}
        {...props}
      />
    // </ThemeProvider>
  );
}
