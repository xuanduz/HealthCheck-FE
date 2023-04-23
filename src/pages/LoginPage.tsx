import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import bannerDoctors from "../assets/images/doctors.jpg";
import logo from "../assets/images/logo.png";
import HorizontalLine from "../components/HorizontalLineComponent";

const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login-content h-screen flex justify-center">
      <div className="login-container w-10/12 flex items-center">
        <div className="login-banner w-1/2 flex flex-col items-center">
          <h3 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400">
            Hello doctor!
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
              Login
            </Typography>
            <form className="mt-8 mb-2 w-84 max-w-screen-lg sm:w-84">
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Username"
                  value={username}
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <Typography color="gray" className="text-sm">
                Forgot your password?
              </Typography>
              <Button className="mt-4" fullWidth>
                Login
              </Button>
              <Typography color="gray" className="text-base text-center mt-4">
                Or login with
              </Typography>
              <div className="flex gap-2 justify-center">
                <p>FB</p>
                <p>GG</p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
