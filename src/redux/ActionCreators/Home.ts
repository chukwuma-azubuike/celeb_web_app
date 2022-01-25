import { AxiosResponse } from "axios";
import * as homeActions from "../ActionTypes/Home";

export const getFeaturedListings = (data: AxiosResponse) => {
  return {
    type: homeActions.FEATURED_LISTINGS,
    payload: data.data,
  };
};

export const toggleSideNav = (data: boolean) => {
  return {
    type: homeActions.TOGGLE_SIDE_NAV,
    payload: data,
  };
};
