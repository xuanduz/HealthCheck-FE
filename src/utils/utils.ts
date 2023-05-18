import axios from "axios";
import Cookies from "universal-cookie";
import { CodeType } from "../data/types.data";
import { toast } from "react-toastify";

const cookies = new Cookies();

export const VNDMoney = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

export const getLabelProvice = (proKey: string, listPro: Array<CodeType>) => {
  return listPro.find((pro: CodeType) => pro.key == proKey);
};

export const handleResetAccountCookies = () => {
  cookies.set("role", "");
  cookies.set("email", "");
  cookies.set("accessToken", "");
  cookies.set("refreshToken", "");
};

export const handleLogout = async () => {
  let apiStr: string | undefined = "";
  let response: boolean = false;
  switch (cookies.get("role")) {
    case "ADMIN":
      apiStr = process.env.REACT_APP_HOST_ADMIN;
      break;
    case "DOCTOR":
      apiStr = process.env.REACT_APP_HOST_DOCTOR;
      break;
    case "PATIENT":
      apiStr = process.env.REACT_APP_HOST;
      break;
    default:
      break;
  }
  if (apiStr) {
    axios
      .delete(`${apiStr}/logout`, {
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
        data: {
          email: cookies.get("email"),
        },
      })
      .then((res: any) => {
        if (res.status == 204) {
          handleResetAccountCookies();
          response = true;
        }
      })
      .catch(() => {
        toast.warn("Đăng xuất thất bại, vui lòng kiểm tra lại kết nối !");
        response = false;
      });
  }
  return response;
};
