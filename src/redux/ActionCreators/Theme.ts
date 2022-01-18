import * as themeActions from "../ActionTypes/Theme";

export const setDarkMode = (data: boolean) => {
  return {
    type: themeActions.DARK_MODE,
    payload: data,
  };
};
