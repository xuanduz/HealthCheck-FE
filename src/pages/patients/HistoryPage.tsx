import Cookies from "universal-cookie";
import SmallContainerComponent from "../../components/SmallContainerComponent";
import { GetRequest } from "../../utils/rest-api";
import { useState, useEffect } from "react";
import { AppointmentType } from "../../data/types.data";
import { Chip, Typography } from "@material-tailwind/react";
import { Avatar } from "@mui/material";
import EmptyDoctor from "../../assets/images/empty-doctor.png";
import { Link } from "react-router-dom";
import { RouteNamePatient } from "../../routes/routes";
import { getColorStatus, getLabelStatus } from "../../data/selection.data";

export default function HistoryPage() {
  const cookies = new Cookies();
  const [history, setHistory] = useState<AppointmentType[]>();

  const getHistory = async () => {
    const res = await GetRequest(`${process.env.REACT_APP_API}/history/${cookies.get("id")}`);
    setHistory(res?.data?.data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <SmallContainerComponent>
      <SmallContainerComponent>
        <div className="flex justify-between mt-4 p-4">
          <div className="flex gap-5 flex-col w-full">
            {history?.length ? (
              history?.map((his: AppointmentType) => (
                <div className=" border-2 rounded-md w-full p-4 flex gap-2">
                  <div className="basis-1/2">
                    <p>{"Thời gian: " + his?.timeData?.value + " Ngày " + his?.date}</p>
                    <div className="flex gap-3">
                      <Avatar
                        alt="doctor"
                        src={his?.doctorData?.image || EmptyDoctor}
                        sx={{ width: 100, height: 100 }}
                      />
                      <div className="flex flex-col gap-2 justify-center">
                        <p>{"Bác sĩ: " + his?.doctorData?.fullName}</p>
                        <Link to={`${RouteNamePatient.DOCTORS}/${his.doctorId}`}>
                          <p className="text-blue-600">Xem chi tiết bác sĩ</p>
                        </Link>
                      </div>
                    </div>
                    {/* <p>{doctor?.clinicData?.name}</p>
                <p>{doctor?.clinicData?.address}</p> */}
                  </div>
                  <div className="basis-1/2">
                    <div className="flex gap-2 items-center">
                      <p>Trạng thái: </p>
                      <Chip
                        value={getLabelStatus(his?.statusKey)}
                        color={getColorStatus(his?.statusKey)}
                      />
                    </div>
                    <div className=" flex flex-col gap-1 mt-1">
                      <p>Hình thức khám: {his?.bookingData?.value}</p>
                      <p>Kết quả: </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Typography variant="h3">Bạn chưa từng đặt lịch tại Health Check!</Typography>
            )}
            {/* <div className="relative">
                <Avatar
                  alt="doctor"
                  src={doctor?.image || EmptyDoctor}
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div>
                <Typography variant="h2">
                  {(doctor?.positionData?.value || "") + " " + doctor?.fullName}
                </Typography>
                <p>{(doctor?.positionData?.value || "") + " " + doctor?.fullName}</p>
                <p>{"Thời gian " + booking?.timeValue + " Ngày " + booking?.date}</p>
                <p>{doctor?.clinicData?.name}</p>
                <p>{doctor?.clinicData?.address}</p>
              </div>
              <div>
                <div>
                  <span>Giá khám:</span>
                  <p>{doctor?.price ? VNDMoney.format(+doctor?.price) : ""}</p>
                </div>
              </div> */}
          </div>
        </div>
      </SmallContainerComponent>
    </SmallContainerComponent>
  );
}
