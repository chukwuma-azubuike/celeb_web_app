import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import TestApp from "./TestApp";
import { darkMode } from "./utils/Theme";
import { muiThemeOveride } from "./utils/muiThemeOveride";
import TopNavBar from "./components/composite/TopNavBar";
import Footer from "./components/composite/Footer";
import Preloader from "./components/atoms/Preloader";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import RoutesHandler from "./routes";

function App() {
  // const [preloader, setPreloader] = React.useState<boolean>(true);

  useEffect(() => {
    // var mode = new darkMode();
    // mode.setDarkMode();
    // window.onload = () => {
    //   setPreloader(false);
    // };
  }, []);

  return (
    <ThemeProvider theme={muiThemeOveride}>
      {/* <TestApp /> */}
      {/* <Preloader className={`${preloader ? "block" : "hidden"}`} /> */}
      <div className="font-sans">
        <TopNavBar />
        <RoutesHandler />
        {/* <Login status={preloader ? "Loading" : "Loaded"} /> */}
        {/* <Signup /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
