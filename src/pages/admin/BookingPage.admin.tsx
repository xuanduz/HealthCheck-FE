import {
  Button,
  Card,
  CardBody,
  Chip,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { DataTablePatientTypes } from "../../components/table/TableComponent";
import DialogComponent from "../../components/dialog/DialogComponent";
import { FiEdit3 } from "react-icons/fi";
import {
  getColorStatus,
  getLabelStatus,
  listStatus,
} from "../../data/status.data";
import PatientFormComponent from "../../components/patient/PatientFormComponent";

const BookingPageAdmin = () => {
  const provinces = [
    {
      name: "Hà Nội",
    },
    {
      name: "Hồ Chí Minh",
    },
    {
      name: "Đà Nẵng",
    },
    {
      name: "Thái Bình",
    },
  ];

  const TABLE_HEAD = [
    "Thời gian",
    "Họ Tên",
    "Số điện thoại",
    "Tỉnh/Thành",
    "Địa chỉ",
    "Lý do khám",
    "Trạng thái",
    "",
  ];
  const dataTable: DataTablePatientTypes[] = [
    {
      time: "9:00 - 9:30",
      fullName: "Xuna Duc",
      addressDetail: "số 18, Đông Quan, Quan Hoa, Cầu Giấy",
      province: "Ha noi",
      gender: "Nam",
      status: "S1",
      reason: "qjow oqiwheo qhwoe hqoweh oqhe oqh",
      phoneNumber: "0123123123",
    },
    {
      time: "9:00 - 9:30",
      fullName: "Xuna Duc",
      addressDetail: "số 18, Đông Quan, Quan Hoa, Cầu Giấy",
      province: "Ha noi",
      gender: "Nam",
      status: "S2",
      reason: "qjow oqiwheo qhwoe hqoweh oqhe oqh",
      phoneNumber: "0123123123",
    },
    {
      time: "9:00 - 9:30",
      fullName: "Xuna Duc",
      addressDetail: "số 18, Đông Quan, Quan Hoa, Cầu Giấy",
      province: "Ha noi",
      gender: "Nam",
      status: "S3",
      reason: "qjow oqiwheo qhwoe hqoweh oqhe oqh",
      phoneNumber: "0123123123",
    },
    {
      time: "9:00 - 9:30",
      fullName: "Xuna Duc",
      addressDetail: "số 18, Đông Quan, Quan Hoa, Cầu Giấy",
      province: "Ha noi",
      gender: "Nam",
      status: "S4",
      reason: "qjow oqiwheo qhwoe hqoweh oqhe oqh",
      phoneNumber: "0123123123",
    },
  ];

  const handleUpdateFormPatient = (data: any) => {
    console.log("handleUpdateFormPatient ", data);
  };

  return (
    <div>
      <Typography variant="h3" className="">
        Quản lý đơn đặt lịch của bệnh nhân
      </Typography>
      <Card className="mt-4 p-3">
        <div className="p-2 flex justify-between">
          <form className="flex gap-4">
            <Input type="search" label="Tìm kiếm theo tên"></Input>
            <Select
              label="Chọn tỉnh/thành phố"
              menuProps={{ className: "h-42" }}
              // onChange={(value: any) =>
              //   setFormData({
              //     ...formData,
              //     province: value,
              //   })
              // }
            >
              {provinces.map(({ name }: any) => (
                <Option key={name} value={name}>
                  {name}
                </Option>
              ))}
            </Select>
            <Select
              label="Chọn trạng thái"
              menuProps={{ className: "h-42" }}
              // onChange={(value: any) =>
              //   setFormData({
              //     ...formData,
              //     province: value,
              //   })
              // }
            >
              {listStatus.map(({ name }: any) => (
                <Option key={name} value={name}>
                  {name}
                </Option>
              ))}
            </Select>

            <Button type="submit">Lọc</Button>
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
              {dataTable?.map((data: DataTablePatientTypes, index: number) => {
                const isLast = index === dataTable?.length - 1;
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
                        {data?.time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.fullName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.phoneNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.province}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.addressDetail}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.reason}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Chip
                        value={getLabelStatus(data?.status)}
                        color={getColorStatus(data?.status)}
                      />
                    </td>
                    <td className={classes}>
                      <Tooltip content="Chỉnh sửa">
                        <IconButton variant="text" color="blue-gray">
                          {/* <FiEdit3 className="h-4 w-4" /> */}
                          <DialogComponent
                            displayButton={<FiEdit3 className="h-4 w-4" />}
                            formatterContent={
                              <PatientFormComponent
                                submitButtonContent="Lưu thông tin"
                                handleSubmitForm={handleUpdateFormPatient}
                                haveStatus={true}
                              />
                            }
                            title="Chỉnh sửa cơ sở y tế"
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
      </Card>
    </div>
  );
};

export default BookingPageAdmin;
