import { AxiosResponse } from "axios";
import * as homeActions from "../ActionTypes/Home";

export const getFeaturedListings = (data: AxiosResponse) => {
  return {
    type: homeActions.FEATURED_LISTINGS,
    payload: data.data,
  };
};
