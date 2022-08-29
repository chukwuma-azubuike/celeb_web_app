import React from "react";
import { loadState } from "..";
import * as authActions from "../ActionTypes/Auth";
import * as homeActions from "../ActionTypes/Home";
import * as themeActions from "../ActionTypes/Theme";
import * as profileActions from "../ActionTypes/Profile";

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
    case homeActions.TOGGLE_SIDE_NAV:
      return {
        ...store,
        sideNavOpen: action.payload,
      };
    case homeActions.FEATURED_LISTINGS:
      return {
        ...store,
        featuredListings: action.payload,
      };
    // Vendor Profile Page
    case profileActions.VENDOR_PROFILE_LOADING:
      return {
        ...store,
        vendorProfile: {
          loading: true,
          profile: null,
        },
      };
    case profileActions.VENDOR_PROFILE_ERROR:
      return {
        ...store,
        vendorProfile: {
          loading: false,
          profile: profileActions.VENDOR_PROFILE_ERROR,
        },
      };
    case profileActions.VENDOR_PROFILE_SUCCESS:
      return {
        ...store,
        vendorProfile: {
          loading: false,
          profile: action.payload,
        },
      };
    // User profile Page
    case profileActions.USER_PROFILE_LOADING:
      return {
        ...store,
        userProfile: {
          loading: true,
          profile: null,
        },
      };
    case profileActions.USER_PROFILE_ERROR:
      return {
        ...store,
        userprofile: {
          loading: false,
          profile: profileActions.USER_PROFILE_ERROR,
        },
      };
    case profileActions.USER_PROFILE_SUCCESS:
      return {
        ...store,
        userProfile: {
          loading: false,
          profile: action.payload,
        },
      };
    default:
      break;
  }
};

export default reducer;
