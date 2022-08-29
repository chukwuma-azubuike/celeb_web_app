import { Dispatch } from "redux";
import Api from "../../utils/Api";
import {
  VendorProfileTypes,
  VENDOR_PROFILE_ERROR,
  VENDOR_PROFILE_LOADING,
  VENDOR_PROFILE_SUCCESS,
} from "../ActionTypes/Profile";

export const getVendorProfile =
  (profileId: string) => async (dispatch: Dispatch<VendorProfileTypes>) => {
    try {
      dispatch({ type: VENDOR_PROFILE_LOADING });
      const response = await Api.get(`celeb/${profileId}`);
      dispatch({
        type: VENDOR_PROFILE_SUCCESS,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: VENDOR_PROFILE_ERROR,
        payload: err,
      });
    }
  };
