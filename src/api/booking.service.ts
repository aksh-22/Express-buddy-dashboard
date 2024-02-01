import { axiosInstance } from "./axios.instance";

export const bookingApi = async ({ params }: any) => {
  return axiosInstance
    .get("admin/booking/list", {
      params,
    })
    .then((res) => res.data);
};

export const bookingDetailsApi = async ({ params }: any) => {
  return axiosInstance
    .get("admin/booking/view", {
      params,
    })
    .then((res) => res.data);
};

// export const bookingDetailsApi = async (data: any) => {
//   return axiosInstance
//     .get("admin/booking/view", {
//       params: { id: data },
//     })
//     .then((res) => res.data);
// };
