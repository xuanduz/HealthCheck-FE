import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { AdminType } from "../../data/types.data";
import { Button, Input, Radio } from "@material-tailwind/react";

export interface AdminFormComponentProps {
  data?: AdminType;
  submitButtonContent?: string;
  handleSubmitForm: SubmitHandler<FieldValues>;
}

export default function AdminFormComponent(props: AdminFormComponentProps) {
  const { data, submitButtonContent, handleSubmitForm } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminType>();

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-5"
      >
        <Input type="text" label="Họ và Tên" {...register("fullName")}></Input>
        <Input type="text" label="Email" {...register("email")}></Input>
        <Input
          type="password"
          label="Mật khẩu"
          {...register("password")}
        ></Input>
        <Input
          type="password"
          label="Nhập lại mật khẩu"
          {...register("rePassword")}
        ></Input>
        <Input
          type="text"
          label="Số điện thoại"
          {...register("phoneNumber")}
        ></Input>
        <div className="flex black-all-child">
          <Radio id="male" label="Nam" {...register("gender")} />
          <Radio id="female" label="Nữ" {...register("gender")} />
        </div>
        <Button type="submit">
          {submitButtonContent ? submitButtonContent : "Gửi"}
        </Button>
      </form>
    </div>
  );
}
