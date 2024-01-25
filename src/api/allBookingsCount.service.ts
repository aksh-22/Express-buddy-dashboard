import { axiosInstance } from "./axios.instance";

export const allBookingsCountApi = async () => {
  return axiosInstance.get("admin/booking/count").then((res) => res.data);
};
