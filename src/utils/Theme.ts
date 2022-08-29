import store from "../redux";

export const ThemeColors = {
  primaryGradient: "linear-gradient(267.61deg, #7708BE 38.06%, #0000EA 96.12%)",
  primaryGreen: "#009846",
  primaryGrey: "#888888",
  primaryPurple: "#7708be",
  transparentGrey: "#88888860",
};

export const dimension = {
  inputHeight: "56.62px",
};

// Dark Mode Logic
export class darkMode {
  setDarkMode = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      store?.getState()?.darkMode 
      // || JSON.parse(localStorage.state).darkMode
      // (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      document.getElementsByTagName("html")[0].setAttribute("class", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  };
}
