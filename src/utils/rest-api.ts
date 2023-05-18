import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const PostRequest = async (
  api: string,
  query: string,
  notifi?: boolean
) => {
  let response: any;
  await axios
    .post(api, query, {
      headers: {
        Authorization: `Bearer ${cookies.get("accessToken")}`,
      },
    })
    .then((res: any) => {
      response = res;
      notifi && toast.success(response.data?.message);
    })
    .catch((err: any) => {
      if (err.code == "ERR_NETWORK") {
        toast.warn("Lỗi mạng !");
      }
    });
  return response;
};
