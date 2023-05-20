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
      <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col gap-5">
        <Input type="text" label="Họ và Tên" {...register("fullName")} required></Input>
        <Input type="email" label="Email" {...register("email")} required></Input>
        <Input type="password" label="Mật khẩu" {...register("password")} required></Input>
        <Input
          type="password"
          label="Nhập lại mật khẩu"
          {...register("rePassword")}
          required
        ></Input>
        <Input
          type="text"
          label="Số điện thoại"
          {...register("phoneNumber")}
          pattern="[0-9]+"
          maxLength={12}
          minLength={9}
          required
        ></Input>
        <div className="flex black-all-child">
          <Radio id="male" label="Nam" value={"true"} {...register("gender")} required />
          <Radio id="female" label="Nữ" value={"false"} {...register("gender")} />
        </div>
        <Button type="submit">{submitButtonContent ? submitButtonContent : "Gửi"}</Button>
      </form>
    </div>
  );
}
