import { useState } from "react";
import { DoctorType, SpecialtyType } from "../../data/types.data";
import {
  Button,
  Card,
  CardBody,
  Input,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import PositionComponent from "../../components/common/PositionComponent";
import ProvinceComponent from "../../components/common/ProvinceComponent";
import SpecialtyMultiSelectComponent from "../../components/common/SpecialtySelectComponent";
import ClinicSelectComponent from "../../components/clinic/ClinicSelectComponent";
import EmptyDoctor from "../../assets/images/empty-doctor.png";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { GetRequest, PostRequest, PutRequest } from "../../utils/rest-api";
import axios from "axios";
import { toast } from "react-toastify";

export default function InfomationPageDoctor() {
  const [doctor, setDoctor] = useState<DoctorType>({});
  const cookies = new Cookies();

  useEffect(() => {
    getDoctorInfo();
  }, []);

  const getDoctorInfo = async () => {
    let id = cookies.get("id");
    const res = await GetRequest(`${process.env.REACT_APP_API_DOCTOR}/doctor/${id}`);
    if (res) {
      setDoctor(res.data?.data);
    }
    console.log(">>> ", res.data?.data);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("doctor", doctor);
    const res = await PutRequest(`${process.env.REACT_APP_API_DOCTOR}/doctor/edit`, doctor, true);
    console.log("res", res);
  };

  const updateData = (newValue: any) => {
    setDoctor({
      ...doctor,
      ...newValue,
    });
  };

  return (
    <>
      <Typography variant="h3" className="">
        Thông tin cá nhân
      </Typography>
      <div className="flex justify-center">
        <Card className="min-w-[650px]">
          <CardBody>
            <form onSubmit={onSubmit} className="flex flex-col mt-6 gap-6">
              <div className="flex flex-col black-all-child">
                <div className="flex gap-1">
                  <p>Chọn giới tính</p>
                  <span className="text-red-600">*</span>
                </div>
                <div
                  className="flex"
                  onChange={(e: any) => {
                    updateData({ gender: JSON.parse(e.target.id) });
                  }}
                >
                  <Radio name="gender" label="Nam" defaultChecked={doctor?.gender} required />
                  <Radio name="gender" label="Nữ" defaultChecked={!doctor?.gender} />
                </div>
              </div>
              <div className="flex gap-5">
                <Input
                  size="lg"
                  label="Email"
                  value={doctor?.email}
                  onChange={(e: any) => updateData({ email: e.target.value })}
                  required
                />
              </div>
              <Input
                size="lg"
                label="Họ tên bác sĩ"
                value={doctor?.fullName}
                onChange={(e: any) => updateData({ fullName: e.target.value })}
                required
              />
              <div className="flex gap-5">
                <Input
                  size="lg"
                  label="Số điện thoại"
                  value={doctor?.phoneNumber}
                  pattern="[0-9]+"
                  maxLength={12}
                  onChange={(e: any) => updateData({ phoneNumber: e.target.value })}
                  required
                />
                <Input
                  size="lg"
                  label="Giá (VNĐ)"
                  value={doctor?.price}
                  type="number"
                  onChange={(e: any) => updateData({ price: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-5 h-[160px]">
                <Input type="text" label="Link Ảnh"></Input>
                <div className="min-w-[150px] max-w-[180px] border-2">
                  <img src={doctor?.image || EmptyDoctor} alt="" />
                </div>
              </div>
              <div className="flex gap-5 black-all-child">
                <div className="w-full">
                  <p>Chức danh</p>
                  <PositionComponent
                    positionKey={doctor?.positionKey}
                    handleChange={(value: string) => updateData({ positionKey: value })}
                  />
                </div>
                <div className="w-full">
                  <p>Tỉnh/Thành</p>
                  <ProvinceComponent
                    required={true}
                    provinceKey={doctor?.provinceKey}
                    handleChange={(value: string) => updateData({ provinceKey: value })}
                  />
                </div>
              </div>
              <div className="black-all-child flex flex-col gap-5">
                <SpecialtyMultiSelectComponent
                  required={true}
                  specialtyData={doctor?.specialtyData}
                  handleChange={(specialies: SpecialtyType[]) =>
                    updateData({ specialtyData: specialies })
                  }
                />
                <ClinicSelectComponent
                  required={true}
                  clinicId={doctor?.clinicId}
                  handleChange={(value: string) => updateData({ clinicId: value })}
                />
              </div>
              <Textarea
                label="Mô tả"
                value={doctor?.describe}
                onChange={(e: any) => updateData({ describe: e.target.value })}
              />
              <div className="text-center w-full">
                <Button type="submit" className="w-full mb-2">
                  {"Xác nhận"}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
