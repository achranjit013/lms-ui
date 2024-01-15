import { getUser } from "../../helper/axiosHelper.js";
import { setUser } from "./userSlice.js";

// logged user info
export const getUserAction = () => async (dispatch) => {
  //get user
  const { status, user } = await getUser();

  if (status === "success") {
    // save user info to store
    dispatch(setUser(user));
  }
};
