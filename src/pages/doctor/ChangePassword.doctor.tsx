import {
  Button,
  Card,
  CardBody,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  oldPass: string;
  newPass: string;
  reNewPass: string;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Card className="w-[450px]">
        <CardBody>
          <Typography variant="h2">Đổi mật khẩu</Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 mt-5"
          >
            <Input
              label="Email"
              type="email"
              required
              {...register("email")}
            ></Input>
            <Input
              label="Mật khẩu cũ"
              type="password"
              required
              {...register("oldPass")}
            ></Input>
            <Input
              label="Mật khẩu mới"
              type="password"
              required
              {...register("newPass")}
            ></Input>
            <Input
              label="Nhập lại mật khẩu mới"
              type="password"
              required
              {...register("reNewPass")}
            ></Input>
            <Button type="submit">Lưu</Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default ChangePassword;
