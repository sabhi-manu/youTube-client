import axiosInstance from "./axios";

export const registerApi = async (data) => {
  return axiosInstance.post("/user/register", data, {
    withCredentials: true,
  });
};

export const loginApi = async (data) => {
  return axiosInstance.post("/user/login", data, {
    withCredentials: true,
  });
};

export const logoutApi = async () => {
  return axiosInstance.post(
    "/user/logout",
    {},
    {
      withCredentials: true,
    },
  );
};

export const currentUserApi = ()=>{
  return axiosInstance.get("/user/curret_user")
}
