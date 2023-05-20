import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const PostRequest = async (api: string, query: any, notifi?: boolean) => {
  let response: any;
  await axios
    .post(api, query, {
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    })
    .then((res: any) => {
      response = res;
      if (notifi) {
        res.data?.success
          ? toast.success(response.data?.message)
          : toast.warn(response.data?.message);
      }
    })
    .catch((err: any) => {
      console.log("err", err);
      if (err.code == "ERR_NETWORK") {
        toast.warn("Lỗi kết nối !");
      }
      if (err.response?.status == 401) {
      }
    });
  return response;
};

export const DeleteRequest = async (api: string, notifi?: boolean) => {
  let response: any;
  await axios
    .delete(api, {
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    })
    .then((res: any) => {
      response = res;
      console.log(">>>", response);
      if (notifi) {
        res.data?.success
          ? toast.success(response.data?.message)
          : toast.warn(response.data?.message);
      }
    })
    .catch((err: any) => {
      console.log("err", err);
      if (err.code == "ERR_NETWORK") {
        toast.warn("Lỗi kết nối !");
      }
      if (err.response?.status == 401) {
      }
    });
  return response;
};
