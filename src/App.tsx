import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import TestApp from "./TestApp";
import { darkMode } from "./utils/Theme";
import { muiThemeOveride } from "./utils/muiThemeOveride";
import TopNavBar from "./components/composite/TopNavBar";
import Footer from "./components/composite/Footer";

function App() {
  useEffect(() => {
    var mode = new darkMode();
    mode.setDarkMode();
  }, []);

  return (
    <ThemeProvider theme={muiThemeOveride}>
      {/* <TestApp /> */}
      <div className="font-sans">
        <TopNavBar />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
