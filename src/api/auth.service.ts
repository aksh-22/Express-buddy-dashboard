import { loginTypes } from "src/@types/auth-type";
import { axiosInstance } from "./axios.instance";

export const loginApi = async (data: loginTypes) => {
  return axiosInstance.post("auth/login", data).then((res) => res.data);
};

// export const loginApi = async (data: loginTypes) => {
//   return axios
//     .post("http://192.168.1.109:8000/auth/login", data)
//     .then((res) => res.data);
// };
