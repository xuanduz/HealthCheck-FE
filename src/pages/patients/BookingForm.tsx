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
import PatientFormComponent from "../../components/patient/PatientFormComponent";

const BookingForm = () => {
  const onSubmitForm = (data: any) => console.log(data);

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
            <PatientFormComponent
              submitButtonContent="Xác nhận lịch khám"
              handleSubmitForm={onSubmitForm}
            />
            <div className="text-center">
              <p>
                Quý khách vui lòng điền đầy đủ thông tin để tiết kiệm thời gian
                làm thủ tục khám.
              </p>
              <p>Hình thức thanh toán sau tại cơ sở y tế.</p>
            </div>
          </div>
        </SmallContainerComponent>
      </SmallContainerComponent>
    </div>
  );
};

export default BookingForm;
