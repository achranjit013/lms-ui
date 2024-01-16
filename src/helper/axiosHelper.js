import axios from "axios";

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const axiosProcessor = async (obj) => {
  const { isPrivate } = obj;
  if (isPrivate) {
    obj.headers = {
      Authorization: getAccessJWT(),
    };
  }

  try {
    const response = await axios(obj);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// post new admin
export const postNewAdmin = (data) => {
  return axiosProcessor({
    method: "post",
    url: userEP + "/admin",
    data,
  });
};

// login user
export const loginUser = (data) => {
  return axiosProcessor({
    method: "post",
    url: userEP + "/login",
    data,
  });
};

// get user after login
export const getUser = () => {
  return axiosProcessor({
    method: "get",
    url: userEP,
    isPrivate: true,
  });
};

// logout user
// export const logoutUser = (data) => {
//   return axiosProcessor({
//     method: "post",
//     url: userEP + "/logout",
//     data,
//   });
// };
