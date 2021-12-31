import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import TestApp from "./TestApp";
import { darkMode } from "./utils/Theme";
import { muiThemeOveride } from "./utils/muiThemeOveride";

function App() {
  useEffect(() => {
    var mode = new darkMode();
    mode.setDarkMode();
  }, []);

  return (
    <ThemeProvider theme={muiThemeOveride}>
      <TestApp />
    </ThemeProvider>
  );
}

export default App;
