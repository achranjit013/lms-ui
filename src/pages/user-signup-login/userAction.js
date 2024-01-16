import { getUser, logoutUser } from "../../helper/axiosHelper.js";
import { setUser } from "./userSlice.js";

// logged user info
export const getUserAction = () => async (dispatch) => {
  //get user
  const { status, user } = await getUser();
  console.log(status, user);

  if (status === "success") {
    // save user info to store
    dispatch(setUser(user));
  }
};

// log out user
// export const logoutUserAction = (email) => async (dispatch) => {
//   const accessJWT = sessionStorage.getItem("accessJWT");

//   // clear the store
//   dispatch(setUser({}));

//   // clear the session and local storage
//   sessionStorage.removeItem("accessJWT");
//   localStorage.removeItem("refreshJWT");

//   // delete tokens (jwts) from both tables (session and user)
//   // await logoutUser({ email, accessJWT });
// };
