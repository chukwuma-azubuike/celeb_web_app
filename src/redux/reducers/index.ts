import React from "react";
import { loadState } from "..";
import * as authActions from "../ActionTypes/Auth";
import * as homeActions from "../ActionTypes/Home";
import * as themeActions from "../ActionTypes/Theme";

const reducer = (store = loadState(), action: { type: string; payload: any }) => {
  switch (action.type) {
    //Authentication
    case authActions.LOGIN_FAILURE:
      break;
    case authActions.LOGIN_SUCCESS:
      return {
        ...store,
        userProfile: action.payload,
      };
    //Theme
    case themeActions.DARK_MODE:
      return {
        ...store,
        darkMode: action.payload,
      };
    //Home Page
    case homeActions.FEATURED_LISTINGS:
      return {
        ...store,
        featuredListings: action.payload,
      };
    default:
      break;
  }
};

export default reducer;
