import { AxiosResponse } from "axios";
import * as authActions from "../ActionTypes/Auth";

export const setLoginDetails = (data: AxiosResponse) => {
  if (data.status === 200)
    return {
      type: authActions.LOGIN_SUCCESS,
      payload: data.data,
    };
  else {
    return {
      type: authActions.LOGIN_FAILURE,
      payload: null,
    };
  }
};
