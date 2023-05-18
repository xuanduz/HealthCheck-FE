import {
  Button,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { listStatus } from "../../data/status.data";
import { PatientType } from "../../data/types.data";

export interface PatientFormComponentProps {
  submitButtonContent?: string;
  handleSubmitForm: SubmitHandler<FieldValues>;
  haveStatus?: boolean;
  haveResultFile?: boolean;
}

export default function PatientFormComponent(props: PatientFormComponentProps) {
  const { submitButtonContent, handleSubmitForm, haveStatus, haveResultFile } =
    props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientType>();

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col mt-6 gap-6"
    >
      <div className="flex flex-col black-all-child">
        <div className="flex gap-1">
          <p>Chọn giới tính</p>
          <span className="text-red-600">*</span>
        </div>
        <div className="flex">
          <Radio id="male" label="Nam" {...register("gender")} />
          <Radio id="female" label="Nữ" {...register("gender")} />
        </div>
      </div>
      <Input
        size="lg"
        label="Họ tên bệnh nhân"
        required
        {...register("fullName", { required: true })}
      />
      <Input
        size="lg"
        label="Số điện thoại"
        required
        {...register("phoneNumber", { required: true })}
      />
      <Input
        size="lg"
        label="Ngày sinh"
        type="date"
        required
        {...register("birthday", { required: true })}
      />
      {/* 
      TODO: demo api province: https://vn-provinces-vue-demo.netlify.app/
    */}
      <div>
        <div className="flex gap-1 mb-1 black-all-child">
          <p>Tỉnh/Thành</p>
          <span className="text-red-600">*</span>
        </div>
        <Select onChange={(e: any) => console.log("change", e)}>
          <Option value="1">Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <Input
        size="lg"
        label="Địa chỉ cụ thể"
        required
        {...register("addressDetail", { required: true })}
      />
      {haveStatus ? (
        <Select
          label="Chọn trạng thái"
          menuProps={{ className: "h-42" }}
          // onChange={(value: any) =>
          //   setFormData({
          //     ...formData,
          //     province: value,
          //   })
          // }
        >
          {listStatus.map(({ name }: any) => (
            <Option key={name} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      ) : null}
      {/* TODO: result file */}
      <Textarea label="Lý do khám bệnh" {...register("reason")} />
      {submitButtonContent ? (
        <div className="text-center w-full">
          <Button type="submit" className="w-full mb-2">
            {submitButtonContent}
          </Button>
        </div>
      ) : null}
    </form>
  );
}
