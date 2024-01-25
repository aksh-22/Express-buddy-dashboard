import { axiosInstance } from "./axios.instance";

export const bookingApi = async () => {
  return axiosInstance.get("admin/booking/list").then((res) => res.data);
};
