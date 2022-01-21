import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { darkMode } from "./utils/Theme";
import { muiThemeOveride } from "./utils/muiThemeOveride";
import TopNavBar from "./components/composite/TopNavBar";
import Footer from "./components/composite/Footer";
import RoutesHandler from "./routes";

function App() {
  useEffect(() => {
    // var mode = new darkMode();
    // mode.setDarkMode();
  }, []);

  return (
    <ThemeProvider theme={muiThemeOveride}>
      <div className="font-sans bg-white">
        <TopNavBar />
        <RoutesHandler />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
