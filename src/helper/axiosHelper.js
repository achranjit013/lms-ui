import axios from "axios";

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";

const axiosProcessor = async (obj) => {
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
