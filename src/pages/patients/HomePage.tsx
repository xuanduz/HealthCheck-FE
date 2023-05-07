import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import ContainerComponent from "../../components/ContainerComponent";
import { TbBuildingHospital } from "react-icons/tb";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import banner from "../../assets/images/banner.jpg";
import CardComponent from "../../components/CardComponent";
import AdviceComponent from "../../components/AdviceComponent";

const HomePagePatient = () => {
  return (
    <>
      <div className="banner">
        <div className="home-banner">
          <img src={banner} alt="" />
        </div>
      </div>
      <ContainerComponent>
        <div className="home">
          <div className="list-option flex gap-12 justify-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-white shadow-2xl p-5 rounded-full">
                <TbBuildingHospital size={30} />
              </div>
              <p className=" font-semibold">Khám tại phòng khám</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-white shadow-lg p-5 rounded-full">
                <AiOutlineHome size={30} />
              </div>
              <p className=" font-semibold">Xét nghiệm tại nhà</p>
            </div>
          </div>
          <div className="pt-10">
            <AdviceComponent />
          </div>
          <div className="pt-16">
            <div className="flex justify-between items-center">
              <Typography variant="h2">Bác sĩ nổi bật trong tuần</Typography>
              <p>Xem thêm</p>
            </div>
            <div className="mt-2  grid grid-cols-4  gap-6">
              {[1, 2, 3, 4].map((item: any, index: number) => (
                <CardComponent
                  key={index}
                  title="Nguyễn Xuân Đức"
                  url={`/doctors/${index}`}
                  price="300.000d"
                  describe="Phó giáo sư, tiến sĩ"
                  address="Ha Noi"
                  image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                />
              ))}
            </div>
          </div>
          <div className="pt-16">
            <div className="flex justify-between items-center">
              <Typography variant="h2">Cơ sở y tế nổi bật</Typography>
              <p>Xem thêm</p>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item: any, index: number) => (
                <CardComponent
                  key={index}
                  url={`/clinics/${index}`}
                  title="Bach Mai Hospital"
                  address="Ha Noi"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwKBUwf_nIB2kVoLrMZj265hgjQgklhd0tw&usqp=CAU"
                />
              ))}
            </div>
          </div>
          <div style={{ height: "200px" }}></div>
        </div>
      </ContainerComponent>
    </>
  );
};

export default HomePagePatient;
