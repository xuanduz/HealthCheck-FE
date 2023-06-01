import { Card, Typography } from "@material-tailwind/react";
import banner from "../../assets/images/banner-2.png";
import { CiLocationOn } from "react-icons/ci";
import ContainerComponent from "../../components/common/ContainerComponent";
import SmallContainerComponent from "../../components/common/SmallContainerComponent";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetRequest } from "../../utils/rest-api";
import { ClinicType, DoctorType } from "../../data/types.data";
import parse from "html-react-parser";
import CardComponent from "../../components/common/CardComponent";
import { VNDMoney } from "../../utils/utils";
import EmptyDoctor from "../../assets/images/empty-doctor.png";

const ClinicDetailPage = () => {
  let { id } = useParams();
  const [clinicData, setClinicData] = useState<ClinicType>();

  useEffect(() => {
    getClinicDetail();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const getClinicDetail = async () => {
    const res = await GetRequest(`${process.env.REACT_APP_API}/clinic/${id}`);
    setClinicData(res.data?.data);
  };

  return (
    <>
      <div className="clinics-banner relative">
        <img src={banner} alt="" />
        <Typography
          variant="h1"
          className="text-blue-500 absolute bottom-2/4 left-0 right-0 text-center"
        >
          Chi tiết cơ sở y tế
        </Typography>
      </div>
      <SmallContainerComponent>
        <div className="clinic-detail mt-4 mb-4">
          <div className="flex flex-col items-center introduce">
            {clinicData?.image ? (
              <Card className="mb-5 w-4/6 overflow-hidden">
                <img
                  alt="clinic"
                  className="h-[32rem] w-full object-cover object-center"
                  src="https://bcp.cdnchinhphu.vn/Uploaded/dangthucuc/2021_04_30/bvbm.jpg"
                />
              </Card>
            ) : null}
            <Typography variant="h2">{clinicData?.name}</Typography>
            <p className="italic flex gap-1">
              <CiLocationOn className="mt-1"></CiLocationOn>
              {clinicData?.address}
            </p>
            <p className="italic">{clinicData?.describe}</p>
          </div>
          <div className="description mt-4">{parse(clinicData?.descriptionHTML || "")}</div>
        </div>
        <div>
          {clinicData?.doctorData?.length ? (
            <>
              <div className="flex justify-between">
                <Typography variant="h4">Một số bác sĩ của {clinicData?.name}</Typography>
                {/* <Link to={`/clinics/doctors`}></Link> */}
              </div>
              <div className="mt-2 grid grid-cols-4 gap-6">
                {clinicData?.doctorData?.map((doctor: DoctorType, index: number) => (
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
            </>
          ) : null}
        </div>
      </SmallContainerComponent>
    </>
  );
};

export default ClinicDetailPage;
