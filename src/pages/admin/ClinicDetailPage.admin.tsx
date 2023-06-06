import { useNavigate, useParams } from "react-router-dom";
import SmallContainerComponent from "../../components/common/SmallContainerComponent";
import { Button, Card, Input, Textarea, Typography } from "@material-tailwind/react";
import ProvinceComponent from "../../components/common/ProvinceComponent";
import ClinicPostComponent from "../../components/clinic/ClinicPostComponent";
import DialogComponent from "../../components/dialog/DialogComponent";
import { useState, useEffect } from "react";
import { ClinicType, SpecialtyType } from "../../data/types.data";
import { DeleteRequest, GetRequest, PostRequest } from "../../utils/rest-api";
import EmptyClinic from "../../assets/images/empty-clinic.png";
import SpecialtyComponent from "../../components/common/SpecialtyComponent";
import SpecialtyMultiSelectComponent from "../../components/common/SpecialtySelectComponent";

export default function ClinicDetailPageAdmin() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [clinicData, setClinicData] = useState<ClinicType>({} as any);
  const [description, setDescription] = useState<string>("");

  const getClinicDetail = async () => {
    const res = await GetRequest(`${process.env.REACT_APP_API_ADMIN}/clinic/${id}`);
    const data = res.data?.data;
    if (data) {
      setClinicData(data);
      setDescription(data?.descriptionHTML);
    }
  };

  const checkIdParams = () => {
    if (+(id as any)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    if (checkIdParams()) {
      getClinicDetail();
    }
  }, [id]);

  const handleSubmit = async () => {
    const data = {
      ...clinicData,
      descriptionHTML: description,
    };
    if (checkIdParams()) {
      await PostRequest(`${process.env.REACT_APP_API_ADMIN}/clinic/edit`, data, true);
    } else {
      await PostRequest(`${process.env.REACT_APP_API_ADMIN}/clinic/add-new`, data, true);
    }
  };

  const handleDelete = async () => {
    await DeleteRequest(`${process.env.REACT_APP_API_ADMIN}/clinic/${id}`, true);
    navigate(-1);
  };

  return (
    <SmallContainerComponent>
      <Typography variant="h3" className="">
        Thông tin đơn đặt lịch
      </Typography>
      <Card className="mt-4 p-3">
        <form className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="basis-1/3">
              <Input
                type="email"
                label="Email"
                value={clinicData?.email}
                autoFocus={false}
                onChange={(e: any) =>
                  setClinicData({
                    ...clinicData,
                    email: e.target.value,
                  })
                }
                required
              ></Input>
            </div>
            <Input
              type="text"
              label="Tên"
              value={clinicData?.name}
              autoFocus={false}
              onChange={(e: any) =>
                setClinicData({
                  ...clinicData,
                  name: e.target.value,
                })
              }
              required
            ></Input>
          </div>
          <div className="flex gap-4 h-[160px]">
            <Input type="text" label="Link Ảnh"></Input>
            <div className="min-w-[150px] max-w-[180px] border-2">
              <img src={clinicData?.image || EmptyClinic} alt="" />
            </div>
          </div>
          <div className="black-all-child flex gap-4">
            <ProvinceComponent
              provinceKey={clinicData?.provinceKey}
              required={true}
              customClassName={"basis-1/3"}
              handleChange={(value: string) =>
                setClinicData({
                  ...clinicData,
                  provinceKey: value,
                })
              }
            />
            <Input
              type="text"
              label="Địa chỉ cụ thể"
              value={clinicData?.address}
              onChange={(e: any) =>
                setClinicData({
                  ...clinicData,
                  address: e.target.value,
                })
              }
              required
            ></Input>
          </div>
          <div className="black-all-child">
            <SpecialtyMultiSelectComponent
              required={true}
              specialtyData={clinicData?.specialtyData}
              handleChange={(specialies: SpecialtyType[]) =>
                setClinicData({
                  ...clinicData,
                  specialtyData: specialies,
                })
              }
            />
          </div>
          <Textarea
            label="Mô tả"
            value={clinicData?.describe}
            onChange={(e: any) =>
              setClinicData({
                ...clinicData,
                describe: e.target.value,
              })
            }
          ></Textarea>
          <ClinicPostComponent
            descriptionHTML={clinicData?.descriptionHTML}
            setDescriptionHTML={setDescription}
          />
          <div className="flex justify-between">
            <div>
              {checkIdParams() ? (
                <div>
                  <DialogComponent
                    displayButton={
                      <Button color="red" className="flex gap-2">
                        Xoá
                      </Button>
                    }
                    formatterContent={<Typography variant="h5">Bạn có muốn xoá ?</Typography>}
                    acceptText="Đồng ý"
                    acceptAction={() => handleDelete()}
                    size="sm"
                    title="Lưu ý"
                  />
                </div>
              ) : null}
            </div>
            <div className="text-center ">
              <div>
                <DialogComponent
                  displayButton={<Button className="w-full mb-2">{"Xác nhận"}</Button>}
                  formatterContent={
                    <Typography variant="h5">Bạn có muốn lưu thông tin vừa chỉnh sửa ?</Typography>
                  }
                  acceptText="Đồng ý"
                  acceptAction={() => handleSubmit()}
                  size="sm"
                  title="Lưu ý"
                />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </SmallContainerComponent>
  );
}
