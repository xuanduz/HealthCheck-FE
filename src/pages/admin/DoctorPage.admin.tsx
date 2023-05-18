import {
  Button,
  Card,
  CardBody,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsEye, BsFilePost } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { GrFormFilter } from "react-icons/gr";
import { MdOutlineAttachFile } from "react-icons/md";
import DialogComponent from "../../components/dialog/DialogComponent";
import ClinicFormComponent from "../../components/clinic/ClinicFormComponent";
import ClinicPostComponent from "../../components/clinic/ClinicPostComponent";
import { ClinicType, DoctorType } from "../../data/types.data";

const DoctorPageAdmin = () => {
  const TABLE_HEAD = [
    "Ảnh",
    "Tên",
    "Email",
    "Số điện thoại",
    "Chuyên khoa",
    "Phòng khám",
    "",
    "",
  ];

  const dataTable: DoctorType[] = [
    {
      image:
        "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      fullName: "Nguyễn Xuân Đức",
      specialty: {
        name: "Chuyên khoa tim",
      },
      clinic: {
        name: "Bệnh viện đa khoa Bạch Mai",
      },
      phoneNumber: "0123987598",
      email: "xuanduc20@gmail.com",
      provinceKey: "Ha noi",
    },
    {
      image:
        "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      fullName: "Nguyễn Xuân Đức",
      specialty: {
        name: "Chuyên khoa tim",
      },
      clinic: {
        name: "Bệnh viện đa khoa Bạch Mai",
      },
      phoneNumber: "0123987598",
      email: "xuanduc20@gmail.com",
      provinceKey: "Ha noi",
    },
    {
      image:
        "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
      fullName: "Nguyễn Xuân Đức",
      specialty: {
        name: "Chuyên khoa tim",
      },
      clinic: {
        name: "Bệnh viện đa khoa Bạch Mai",
      },
      phoneNumber: "0123987598",
      email: "xuanduc20@gmail.com",
      provinceKey: "Ha noi",
    },
  ];

  const clinics = [
    {
      name: "Bệnh viện Bạch Mai",
    },
    {
      name: "Bệnh viện Đa Khoa Mỹ Đức",
    },
    {
      name: "Bệnh viện ABC",
    },
  ];

  const specialties = [
    {
      name: "Chuyên khoa răng hàm mặt",
    },
    {
      name: "Chuyên khoa xương khớp",
    },
    {
      name: "Chuyên khoa tim",
    },
  ];

  return (
    <div>
      <Typography variant="h3" className="">
        Quản lý cơ sở y tế
      </Typography>
      <Card className="mt-4 p-3">
        <div className="p-2 flex justify-between">
          <form className="flex gap-4">
            <Input type="search" label="Tìm kiếm theo tên"></Input>
            <Select
              label="Chọn phòng khám"
              menuProps={{ className: "h-42" }}
              // onChange={(value: any) =>
              //   setFormData({
              //     ...formData,
              //     province: value,
              //   })
              // }
            >
              {clinics.map(({ name }: any) => (
                <Option key={name} value={name}>
                  {name}
                </Option>
              ))}
            </Select>
            <Select
              label="Chọn chuyên khoa"
              menuProps={{ className: "h-42" }}
              // onChange={(value: any) =>
              //   setFormData({
              //     ...formData,
              //     province: value,
              //   })
              // }
            >
              {specialties.map(({ name }: any) => (
                <Option key={name} value={name}>
                  {name}
                </Option>
              ))}
            </Select>
            <Button type="submit">Lọc</Button>
          </form>
          <Button className="flex gap-2">
            <AiOutlinePlus color="white" className="mt-[2px]" />
            Thêm mới bác sĩ
          </Button>
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
              {dataTable?.map((data: DoctorType, index: number) => {
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
                      <img
                        src={data?.image}
                        alt="image"
                        className="max-w-[90px]"
                      />
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
                        {data?.email}
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
                        {data?.specialty?.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.clinic?.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Bài viết">
                        <IconButton variant="text" color="blue-gray">
                          <DialogComponent
                            displayButton={<BsFilePost className="h-4 w-4" />}
                            formatterContent={<ClinicPostComponent />}
                            title="Bài viết cơ sở y tế"
                            accessText="Lưu"
                            size="lg"
                          />
                        </IconButton>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Chỉnh sửa">
                        <IconButton variant="text" color="blue-gray">
                          {/* <FiEdit3 className="h-4 w-4" /> */}
                          <DialogComponent
                            displayButton={<FiEdit3 className="h-4 w-4" />}
                            formatterContent={
                              <ClinicFormComponent data={"a"} />
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

export default DoctorPageAdmin;
