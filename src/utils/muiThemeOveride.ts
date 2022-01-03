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
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          // color: "red",
        },
      },
    },
    // MuiOutlinedInput:{
    //   styleOverrides:{
    //     input:{
    //       color:ThemeColors.primaryGradient
    //     },
    //     root:{
    //       borderInlineColor: ThemeColors.primaryGradient
    //     }
    //   }
    // }
  },
});
