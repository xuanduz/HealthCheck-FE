import { Button, Card, Typography } from "@material-tailwind/react";
import banner from "../../assets/images/banner-2.png";
import ContainerComponent from "../../components/ContainerComponent";
import HorizontalLine from "../../components/HorizontalLineComponent";
import { Avatar } from "@mui/material";
import SmallContainerComponent from "../../components/SmallContainerComponent";
import { GrSchedule } from "react-icons/gr";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import SmallCardComponent from "../../components/SmallCardComponent";
import { Link } from "react-router-dom";
import { RouteName } from "../../data/router.data";

const DoctorDetailPage = () => {
  return (
    <>
      <div className="relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Thông tin bác sĩ
        </Typography>
      </div>
      <SmallContainerComponent>
        <div className="introduce flex justify-between">
          <div className="flex gap-4">
            <div className="relative">
              <Avatar
                alt="doctor"
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                sx={{ width: 200, height: 200 }}
                className="absolute top-[-5rem]"
              />
            </div>
            <div>
              <Typography variant="h2">Lorem, ipsum dolor.</Typography>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div>
            <div className="flex gap-1 pt-2 pr-6 pb-2 pl-6 border-2 rounded-lg">
              <span>Giá khám:</span>
              <p>315.000 đ</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="simple_info basis-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus officia voluptatem officiis! Tenetur expedita, saepe,
            delectus at asperiores nulla dolores dicta quis esse quaerat quasi
            adipisci molestiae porro animi totam deserunt. Voluptatibus quis
            laborum ratione aspernatur. Maiores porro error ipsa. Vitae,
            blanditiis maiores nobis ipsa sint perspiciatis optio accusantium
            iure!
          </div>
          <div className="flex flex-col gap-4 basis-1/2">
            <Card className="schedule p-4">
              <form>
                <div>
                  <Typography variant="h4" className="flex gap-2">
                    <GrSchedule className="mt-1" /> Lịch khám
                  </Typography>
                  <HorizontalLine />
                </div>
                <Link to={RouteName.BOOKING_PAGE}>
                  <Button className="w-full">Đặt lịch ngay</Button>
                </Link>
              </form>
            </Card>
            <Card color="yellow" className="p-4">
              <Typography variant="h4" className="flex gap-2 mb-2 text-black">
                <BsFillExclamationCircleFill className="mt-1" /> Chú ý
              </Typography>
              <p className="text-black">
                Lịch là lịch dự kiến có thể sẽ thay đổi. Chúng tôi khuyên bạn
                nên đặt lịch bác sĩ trong vòng 7 ngày để tránh thời gian chờ
                đợi.
              </p>
            </Card>
            <div>
              <Typography variant="h5" className="mb-2">
                Chuyên gia tương tự
              </Typography>
              <div>
                <SmallCardComponent
                  title="quiwb qw eqw"
                  url="213"
                  describe="qwe qwe qwe qweqw riwor ioqow"
                  image="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                />
              </div>
            </div>
          </div>
        </div>
      </SmallContainerComponent>
    </>
  );
};

export default DoctorDetailPage;
