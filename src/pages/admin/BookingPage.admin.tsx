import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import DialogComponent from "../../components/dialog/DialogComponent";
import { FiEdit3 } from "react-icons/fi";
import {
  getColorStatus,
  getLabelStatus,
  listStatus,
} from "../../data/status.data";
import PatientFormComponent from "../../components/patient/PatientFormComponent";
import {
  AppointmentType,
  CodeType,
  PatientType,
  defaultPageInfo,
} from "../../data/types.data";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { provincesSelector } from "../../data/recoil/commonData";
import { useEffect, useState } from "react";
import {
  bookingAtom,
  bookingSelector,
} from "../../data/recoil/admin/booking.admin";
import Pagination, {
  PaginationData,
  PaginationProps,
} from "../../components/PaginationComponent";
import ProvinceComponent from "../../components/ProvinceComponent";
import AdminFormPatientComponent from "../../components/admin/AdminFormPatientComponent";
import { PostRequest } from "../../utils/rest-api";

export interface FilterAppointmentType {
  date?: string;
  orderBy?: string;
  patientName?: string;
  provinceKey?: string;
  statusKey?: string;
  bookingType?: string;
}

export interface FilterBookingType
  extends FilterAppointmentType,
    PaginationData {}

const BookingPageAdmin = () => {
  const provinces = useRecoilValueLoadable(provincesSelector);
  const [listProvinces, setListProvinces] = useState<CodeType[]>([]);
  const setFilterBooking = useSetRecoilState(bookingAtom(defaultPageInfo));
  const listBookingLoadable = useRecoilValueLoadable(bookingSelector);
  const [listBookings, setListBookings] = useState<AppointmentType[]>([]);
  const [formData, setFormData] = useState<FilterAppointmentType>();
  const [paginationData, setPaginationData] = useState<PaginationData>();
  const [filter, setFilter] = useState<FilterBookingType>(defaultPageInfo);

  useEffect(() => {
    if (provinces?.state == "hasValue") {
      setListProvinces([
        { id: 0, key: "", type: "", value: "Tất cả" },
        ...provinces?.contents?.data?.data,
      ]);
    }
  }, [provinces.state]);

  useEffect(() => {
    if (listBookingLoadable?.state == "hasValue") {
      setListBookings(listBookingLoadable?.contents?.data?.data);
      setPaginationData(listBookingLoadable?.contents?.data?.pagination);
    }
  }, [listBookingLoadable]);

  const TABLE_HEAD = [
    "Thời gian",
    "Họ Tên",
    "Số điện thoại",
    "Tỉnh/Thành",
    "Trạng thái",
    "Địa điểm khám",
    "",
  ];

  const filterOption = [
    {
      label: "Mới nhất",
      value: "DESC",
    },
    {
      label: "Cũ nhất",
      value: "ASC",
    },
  ];

  const bookingOption = [
    {
      label: "Khám tại nhà",
      value: "B2",
    },
    {
      label: "Khám tại phòng khám",
      value: "B1",
    },
  ];

  const handleUpdateFormPatient = async (data: any) => {
    const res = await PostRequest(
      `${process.env.REACT_APP_HOST_ADMIN}/appointment/edit`,
      data,
      true
    );
  };

  const handleFilter = async (e: any) => {
    e.preventDefault();
    setFilter({
      ...filter,
      ...formData,
    });
  };

  const handlePaging = (paginationData: PaginationData) => {
    setFilter({
      ...filter,
      ...paginationData,
    });
  };

  useEffect(() => {
    if (filter) {
      setFilterBooking(filter);
    }
  }, [filter]);

  return (
    <div>
      <Typography variant="h3" className="">
        Quản lý đơn đặt lịch của bệnh nhân
      </Typography>
      <div className="w-48 mt-4"></div>
      <Card className="mt-4 p-3">
        <div className="p-2 flex justify-between">
          <form className="flex gap-4" onSubmit={handleFilter}>
            <Input
              type="date"
              label="Chọn ngày"
              className="bg-white"
              onChange={(e: any) =>
                setFormData({
                  ...formData,
                  date: e.target.value.split("-").reverse().join("-"),
                })
              }
            ></Input>
            <Select
              label="Lọc theo thời gian"
              menuProps={{ className: "h-42" }}
              onChange={(value: any) =>
                setFormData({
                  ...formData,
                  orderBy: value,
                })
              }
            >
              {filterOption.map((opt: any) => (
                <Option key={opt?.value} value={opt?.value}>
                  {opt?.label}
                </Option>
              ))}
            </Select>
            <Input
              type="search"
              label="Tìm kiếm theo tên"
              onChange={(e: any) =>
                setFormData({ ...formData, patientName: e.target.value })
              }
            ></Input>
            <ProvinceComponent
              handleChange={(value: string) =>
                setFormData({
                  ...formData,
                  provinceKey: value,
                })
              }
            />
            <Select
              label="Chọn trạng thái"
              menuProps={{ className: "h-42" }}
              onChange={(value: any) =>
                setFormData({
                  ...formData,
                  statusKey: value,
                })
              }
            >
              {listStatus.map((opt: any) => (
                <Option key={opt.name} value={opt.value}>
                  {opt.name}
                </Option>
              ))}
            </Select>
            <Select
              label="Địa điểm khám"
              menuProps={{ className: "h-42" }}
              onChange={(value: any) =>
                setFormData({
                  ...formData,
                  bookingType: value,
                })
              }
            >
              {bookingOption.map((opt: any) => (
                <Option key={opt.name} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
            <div>
              <Button type="submit">Lọc</Button>
            </div>
          </form>
        </div>
      </Card>
      <Card className="mt-6">
        <CardBody>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th
                  className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 w-[30px]`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    STT
                  </Typography>
                </th>
                {TABLE_HEAD.map((head: string, index: number) => (
                  <th
                    key={head}
                    className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {listBookings?.map((data: AppointmentType, index: number) => {
                const isLast = index === listBookings?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {index + 1}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.timeData?.value + " / " + data.date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.patientData?.fullName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.patientData?.phoneNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.patientData?.provincePatientData?.value}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Chip
                        value={getLabelStatus(data?.statusKey)}
                        color={getColorStatus(data?.statusKey)}
                      />
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.bookingData?.value}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Chỉnh sửa">
                        <IconButton variant="text" color="blue-gray">
                          <DialogComponent
                            displayButton={<FiEdit3 className="h-4 w-4" />}
                            formatterContent={
                              <AdminFormPatientComponent
                                handleSubmitForm={handleUpdateFormPatient}
                                appointmentData={data}
                              />
                            }
                            title="Chỉnh sửa thông tin bệnh nhân"
                            accessText="Lưu"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            <Pagination
              paginationData={paginationData}
              handlePaging={handlePaging}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingPageAdmin;
