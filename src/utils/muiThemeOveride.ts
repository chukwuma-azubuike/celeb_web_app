import { createTheme } from "@mui/material";
import { ThemeColors } from "./Theme";

// Overide MUI Custom Fonts
export const muiThemeOveride = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            '"Open Sans", sans-serif';
          }
        `,
    },
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          // color: "red",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        active: {
          // color: "transparent",
          // backgroundImage: ThemeColors.primaryGradient,
          // borderRadius: "4pc",
        },
        completed: {
          // color: "red",
          // backgroundColor:'red'
        },
      },
    },
  },
});
