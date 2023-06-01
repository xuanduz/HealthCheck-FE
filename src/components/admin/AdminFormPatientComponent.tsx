import { Button, Input, Radio, Textarea, Typography } from "@material-tailwind/react";
import { bookingOption, listStatus } from "../../data/selection.data";
import ProvinceComponent from "../common/ProvinceComponent";
import { AppointmentType, PatientType } from "../../data/types.data";
import { useState } from "react";
import DialogComponent from "../dialog/DialogComponent";

export interface AdminFormPatientComponentProps {
  handleSubmitForm: Function;
  appointmentData?: AppointmentType;
  handleDelete?: Function;
  isDoctor?: boolean;
}

export default function AdminFormPatientComponent(props: AdminFormPatientComponentProps) {
  const { handleSubmitForm, appointmentData, handleDelete, isDoctor } = props;
  const [patient, setPatient] = useState<PatientType>(appointmentData?.patientData || {});
  const [status, setStatus] = useState<any>(appointmentData?.statusKey);
  const [bookingType, setBookingType] = useState<any>(appointmentData?.bookingType);
  const [reason, setReason] = useState<any>(appointmentData?.reason);
  const listStatusDoctor = listStatus?.filter((stt: any) => stt.key == "S2" || stt.key == "S3");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const updateValue = {
      id: appointmentData?.id,
      statusKey: status,
      bookingType: bookingType,
      reason: reason,
      patientData: { ...patient },
    };
    handleSubmitForm(updateValue);
  };

  const updateValue = (newValue: any) => {
    setPatient({
      ...patient,
      ...newValue,
    });
  };

  return (
    <form onSubmit={onSubmit} className="">
      <div>
        <Typography variant="h5">Thông tin bệnh nhân</Typography>
        <div className="flex flex-col gap-6 p-2">
          <div className="flex flex-col black-all-child">
            <div className="flex gap-1">
              <p>Chọn giới tính</p>
              <span className="text-red-600">*</span>
            </div>
            <div
              className="flex"
              onChange={(e: any) => {
                updateValue({ gender: JSON.parse(e.target.id) });
              }}
            >
              <Radio
                name="gender"
                id="true"
                label="Nam"
                defaultChecked={patient?.gender == true ? true : false}
                disabled={isDoctor}
              />
              <Radio
                name="gender"
                id="false"
                label="Nữ"
                defaultChecked={patient?.gender == false ? true : false}
                disabled={isDoctor}
              />
            </div>
          </div>
          <Input
            size="lg"
            label="Họ tên bệnh nhân"
            value={patient?.fullName}
            onChange={(e: any) => updateValue({ fullName: e.target.value })}
            required
            disabled={isDoctor}
          />
          <Input
            size="lg"
            label="Email"
            value={patient?.email}
            onChange={(e: any) => updateValue({ email: e.target.value })}
            required
            disabled={isDoctor}
          />
          <Input
            size="lg"
            label="Số điện thoại"
            value={patient?.phoneNumber}
            pattern="[0-9]+"
            maxLength={12}
            onChange={(e: any) => updateValue({ phoneNumber: e.target.value })}
            required
            disabled={isDoctor}
          />
          <Input
            size="lg"
            label="Ngày sinh"
            type="date"
            value={patient?.birthday?.split("-").reverse().join("-")}
            onChange={(e: any) =>
              updateValue({
                birthday: e.target.value?.split("-").reverse().join("-"),
              })
            }
            required
            disabled={isDoctor}
          />
          <div className="black-all-child">
            <p>Tỉnh/Thành</p>
            <ProvinceComponent
              provinceKey={patient?.provinceKey}
              handleChange={(value: string) => updateValue({ provinveKey: value })}
              disabled={isDoctor}
            />
          </div>
          <Input
            size="lg"
            label="Địa chỉ cụ thể"
            value={patient?.addressDetail}
            onChange={(e: any) => updateValue({ addressDetail: e.target.value })}
            required
            disabled={isDoctor}
          />
          <div className=" black-all-child">
            <p>Trạng thái</p>
            <select
              id="status"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              onChange={(e: any) => setStatus(e.target.value)}
              value={status}
            >
              {(isDoctor ? listStatusDoctor : listStatus)?.map((stt: any, idx: number) => (
                <option key={stt.name} value={stt.key}>
                  {stt.value}
                </option>
              ))}
            </select>
          </div>
          <div className=" black-all-child">
            <p>Địa điểm khám</p>
            <select
              id="status"
              className="bg-white border border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
              onChange={(e: any) => setBookingType(e.target.value)}
              value={bookingType}
              disabled={isDoctor}
            >
              {bookingOption?.map((stt: any, idx: number) => (
                <option key={stt.name} value={stt.key}>
                  {stt.value}
                </option>
              ))}
            </select>
          </div>
          {/* TODO: result file */}
          <Textarea
            label="Lý do khám bệnh"
            value={reason}
            onChange={(e: any) => setReason(e.target.value)}
            disabled={isDoctor}
          />
        </div>
      </div>
      <div className="mt-2">
        <Typography variant="h5">Thông tin bác sĩ</Typography>
        <div className="flex flex-col gap-6 p-2"></div>
      </div>
      <div className="flex justify-between">
        <div>
          {isDoctor ? null : (
            <DialogComponent
              displayButton={
                <Button color="red" className="flex gap-2">
                  Xoá
                </Button>
              }
              formatterContent={<Typography variant="h5">Bạn có muốn xoá ?</Typography>}
              acceptText="Đồng ý"
              acceptAction={() => handleDelete && handleDelete(appointmentData?.id)}
              size="sm"
              title="Lưu ý"
            />
          )}
        </div>
        <div className="text-center ">
          <Button type="submit" className="w-full mb-2">
            {"Xác nhận"}
          </Button>
        </div>
      </div>
    </form>
  );
}
