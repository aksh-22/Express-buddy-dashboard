import { axiosInstance } from "./axios.instance";

export const bookingApi = async ({ params }: any) => {
  return axiosInstance
    .get("admin/booking/list", {
      params,
    })
    .then((res) => res.data);
};
