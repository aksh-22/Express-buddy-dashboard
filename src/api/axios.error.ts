import { AxiosError } from "axios";
import { store } from "src/store/store";
import { toast } from "react-toastify";

function notify(errMessage: string) {
  toast.error(errMessage);
}

export const axiosError = async (err: AxiosError<any>) => {
  // console.error("err", JSON.stringify(err.response, null, 2));
  const errorMessage =
    typeof err.response?.data?.message === "string"
      ? err.response?.data?.message
      : err.response?.data?.message?.[0];

  // console.log("err.response?.data: ", err.response?.data?.message);
  notify(errorMessage);
  // toast({
  //   title: err.response?.data?.message ?? "Something went wrong",
  //   status: "error",
  //   position: "top-right",
  //   variant: "top-accent",
  // });
  if (err && err?.response?.status === 401) {
    store.dispatch({
      type: "CLEAR_REDUX",
    });
  }
  throw err;
};
