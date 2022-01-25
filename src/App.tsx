import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import { darkMode } from "./utils/Theme";
import { muiThemeOveride } from "./utils/muiThemeOveride";
import TopNavBar from "./components/composite/TopNavBar";
import Footer from "./components/composite/Footer";
import RoutesHandler from "./routes";
import { Provider } from "react-redux";
import store from "./redux";
import SideNavBar from "./components/composite/SideNavBar";

function App() {
  useEffect(() => {
    // var mode = new darkMode();
    // mode.setDarkMode();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={muiThemeOveride}>
        <div className="font-sans bg-white">
          <TopNavBar />
          <SideNavBar />
          <RoutesHandler />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
