import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import bannerDoctors from "../assets/images/doctors.jpg";
import logo from "../assets/images/logo.png";
import HorizontalLine from "../components/HorizontalLineComponent";
import axios from "axios";
import {
  RouteNameAdmin,
  RouteNameDoctor,
  RouteNamePatient,
} from "../routes/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import {
  adminAccessTokenSelector,
  adminRefreshTokenSelector,
} from "../data/recoil/admin/auth.admin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export interface LoginPageProps {
  role: "ADMIN" | "DOCTOR" | "PATIENT";
}

const LoginPage = (props: LoginPageProps) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken] = useRecoilState(
    adminRefreshTokenSelector
  );
  const [accessToken, setAccessToken] = useRecoilState(
    adminAccessTokenSelector
  );
  const { role } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let location = useLocation();

  const isPatientRoute = () => {
    return !location.pathname.includes("/system");
  };

  const loginSuccess = (data: any) => {
    setRefreshToken(data.refreshToken);
    setAccessToken(data.accessToken);
    toast.success(data.message);
    cookies.set("role", role);
    cookies.set("email", email);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (role == "ADMIN") {
      const { data } = await axios.post(
        `${process.env.REACT_APP_HOST + RouteNameAdmin.LOGIN}`,
        {
          email: email,
          password: password,
        }
      );
      if (data.success) {
        loginSuccess(data);
        navigate(RouteNameAdmin.HOME);
      } else {
        toast.warn(data.message);
      }
    }
    if (role == "DOCTOR") {
      const { data } = await axios.post(
        `${process.env.REACT_APP_HOST + RouteNameDoctor.LOGIN}`,
        {
          email: email,
          password: password,
        }
      );
      if (data.success) {
        loginSuccess(data);
        navigate(RouteNameDoctor.HOME);
      } else {
        toast.warn(data.message);
      }
    }
    if (role == "PATIENT") {
      const { data } = await axios.post(
        `${process.env.REACT_APP_HOST + RouteNamePatient.LOGIN}`,
        {
          email: email,
          password: password,
        }
      );
      if (data.success) {
        loginSuccess(data);
        navigate(RouteNamePatient.HOME);
      } else {
        toast.warn(data.message);
      }
    }
  };

  const getGreeting = (role: string) => {
    if (role == "ADMIN") return "Xin chào Quản trị !";
    if (role == "DOCTOR") return "Xin chào Bác sĩ !";
    if (role == "PATIENT") return "Xin chào !";
  };

  return (
    <div className="login-content h-screen flex justify-center">
      <div className="login-container w-10/12 flex items-center">
        <div className="login-banner w-1/2 flex flex-col items-center">
          <h3 className="font-extrabold text-center text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            {getGreeting("PATIENT")}
          </h3>
          <img src={bannerDoctors} className="login-banner-img" alt="" />
        </div>
        <div className="login-form w-1/2 flex justify-center">
          <Card shadow={true} className={"w-96 h-auto p-4"}>
            <div className="flex justify-center mb-4">
              <img src={logo} className="login-banner-img w-24" alt="" />
            </div>
            <HorizontalLine widthScale="80%" />
            <Typography
              className="text-center mt-2"
              variant="h2"
              color="blue-gray"
            >
              Đăng nhập
            </Typography>
            <form
              className="mt-8 mb-2 w-84 max-w-screen-lg sm:w-84"
              onSubmit={handleLogin}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Mật khẩu"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {isPatientRoute() ? (
                <Link to={"/register"}>
                  <p>Đăng ký ngay</p>
                </Link>
              ) : null}
              <Button className="mt-4" fullWidth type="submit">
                Đăng nhập
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
