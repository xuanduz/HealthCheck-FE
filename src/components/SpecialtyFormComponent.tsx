import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Empty from "../assets/images/empty.jpg";
import { SpecialtyType } from "../data/types.data";
import DialogComponent from "./dialog/DialogComponent";

export interface ClinicFormComponentProps {
  data?: SpecialtyType;
  handleDelete?: Function;
  handleSubmitForm?: Function;
}

export default function SpecialtyFormComponent(props: ClinicFormComponentProps) {
  const { data, handleSubmitForm, handleDelete } = props;
  const [specilatyData, setSpecilatyData] = useState<SpecialtyType>(data || ({} as any));

  const onSubmit = (e: any) => {
    e.preventDefault();
    handleSubmitForm && handleSubmitForm(specilatyData);
  };

  //! TODO: Cài thêm thư viện hiển thị ảnh:
  //neptunian.github.io/react-photo-gallery/examples/lightbox.html
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        type="text"
        label="Tên"
        value={specilatyData?.name}
        autoFocus={false}
        onChange={(e: any) =>
          setSpecilatyData({
            ...specilatyData,
            name: e.target.value,
          })
        }
        required
      ></Input>
      <div className="flex gap-4 h-[160px]">
        <Input type="text" label="Link Ảnh"></Input>
        <div className="min-w-[150px] max-w-[180px] border-2">
          <img src={specilatyData?.image || Empty} alt="" />
        </div>
      </div>
      <Textarea
        label="Mô tả"
        value={specilatyData?.describe}
        onChange={(e: any) =>
          setSpecilatyData({
            ...specilatyData,
            describe: e.target.value,
          })
        }
      ></Textarea>
      {/* <SpecialtyPostComponent descriptionHTML={description} setDescriptionHTML={setDescription} /> */}
      <div className="flex justify-between">
        <div>
          {data ? (
            <DialogComponent
              displayButton={
                <Button color="red" className="flex gap-2">
                  Xoá
                </Button>
              }
              formatterContent={<Typography variant="h5">Bạn có muốn xoá ?</Typography>}
              acceptText="Đồng ý"
              acceptAction={() => handleDelete && handleDelete(data?.id)}
              size="sm"
              title="Lưu ý"
            />
          ) : null}
        </div>
        <Button type="submit">Lưu</Button>
      </div>
    </form>
  );
}
