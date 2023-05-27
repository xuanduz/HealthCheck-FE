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
import { useState, useEffect } from "react";
import { FilterDoctor } from "../../types/api.type";
import axios from "axios";
import { ClinicType, DoctorType } from "../../data/types.data";
import { VNDMoney, getLabelProvice } from "../../utils/utils";
import EmptyDoctor from "../../assets/images/empty-doctor.png";
import EmptyClinic from "../../assets/images/empty-clinic.png";

const HomePagePatient = () => {
  const [featuredDoctors, setFeaturedDoctors] = useState([]);
  const [featuredClinics, setFeaturedClinics] = useState([]);
  const [doctorFilter, setDoctorFilter] = useState<FilterDoctor>({
    pageNum: 1,
    pageSize: 4,
  });
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const filterDoctor = async (doctorFilter: FilterDoctor) => {
    const data = await axios.post(
      `${process.env.REACT_APP_API}/doctor/featured/filter`,
      doctorFilter
    );
    setFeaturedDoctors(data.data?.data);
  };
  const filterClinic = async (doctorFilter: FilterDoctor) => {
    const data = await axios.post(`${process.env.REACT_APP_API}/clinic/filter`, doctorFilter);
    setFeaturedClinics(data.data?.data);
  };
  useEffect(() => {
    filterDoctor(doctorFilter);
    filterClinic(doctorFilter);
  }, [doctorFilter]);

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
              <Typography variant="h2">Bác sĩ nổi bật</Typography>
              <p>Xem thêm</p>
            </div>
            <div className="mt-2  grid grid-cols-4  gap-6">
              {featuredDoctors?.map((doctor: DoctorType, index: number) => (
                <CardComponent
                  key={index}
                  title={doctor?.positionData?.value + " " + doctor.fullName}
                  url={`/doctors/${doctor.id}`}
                  price={doctor?.price ? VNDMoney.format(+doctor?.price) : ""}
                  describe={doctor?.describe}
                  // address={getLabelProvice(doctor?.provinceKey ? doctor.provinceKey : '', [] as any)}
                  image={doctor?.image || EmptyDoctor}
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
              {featuredClinics?.map((item: ClinicType, index: number) => (
                <CardComponent
                  key={index}
                  url={`/clinics/${item.id}`}
                  title={item?.name}
                  address={item?.provinceData?.value}
                  describe={item?.address}
                  image={item?.image || EmptyClinic}
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
