import {
  Button,
  Card,
  Input,
  Option,
  Radio,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SmallContainerComponent from "../../components/SmallContainerComponent";
import { Avatar } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-blue-50 flex justify-center">
        <div className="w-8/12 booking-title relative pt-10 pb-10 flex items-center">
          <div
            className="z-10 p-2 basis-1/6"
            role="button"
            onClick={() => navigate(-1)}
          >
            <Typography variant="h5" className="flex gap-2 items-center">
              <BiArrowBack /> Trở lại
            </Typography>
          </div>
          <Typography variant="h2" className="text-center basis-4/6">
            Đặt lịch khám chuyên gia
          </Typography>
        </div>
      </div>
      <SmallContainerComponent>
        <SmallContainerComponent>
          <div className="introduce flex justify-between mt-4 border-2 rounded-md p-4">
            <div className="flex gap-4">
              <div className="relative">
                <Avatar
                  alt="doctor"
                  src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div>
                <Typography variant="h2">Lorem, ipsum dolor.</Typography>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col mt-6 gap-6"
            >
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <p>Chọn giới tính</p>
                  <span className="text-red-600">*</span>
                </div>
                <div className="flex  black-all-child">
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
                demo api province: https://vn-provinces-vue-demo.netlify.app/
              */}
              <div>
                <div className="flex gap-1 mb-1">
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
              <Textarea label="Lý do khám bệnh" {...register("reason")} />
              <div className="text-center w-full">
                <Button type="submit" className="w-full mb-2">
                  Xác nhận lịch khám
                </Button>
                <p>
                  Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời
                  gian làm thủ tục khám.
                </p>
                <p>Hình thức thanh toán sau tại cơ sở y tế.</p>
              </div>
            </form>
          </div>
        </SmallContainerComponent>
      </SmallContainerComponent>
    </div>
  );
};

export default BookingForm;
