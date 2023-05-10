import { Input, Option, Select, Textarea } from "@material-tailwind/react";

export interface ClinicFormComponentProps {
  data: any;
}

export default function ClinicFormComponent(props: ClinicFormComponentProps) {
  const { data } = props;

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
  //! TODO: Cài thêm thư viện hiển thị ảnh:
  //neptunian.github.io/react-photo-gallery/examples/lightbox.html
  http: return (
    <form className="flex flex-col gap-4">
      <Input type="text" label="Tên"></Input>
      <div className="flex gap-4 h-[160px] ">
        <Input type="text" label="Link Ảnh"></Input>

        <div className="min-w-[150px] max-w-[180px] border-2">
          <img
            src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
            alt=""
          />
        </div>
      </div>
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
      <Input type="text" label="Địa chỉ cụ thể"></Input>
      <Textarea label="Mô tả"></Textarea>
    </form>
  );
}
