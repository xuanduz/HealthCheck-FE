import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { FaHandPointRight } from "react-icons/fa";
import { useState } from "react";

export interface PriceRangeType {
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
}

export interface InputFilter {
  name?: string;
  province?: string;
  price?: PriceRangeType;
}

export interface Mark {
  value: number;
  label?: React.ReactNode;
}

export interface FilterFormProps {
  haveName?: boolean;
  haveProvince?: boolean;
  havePrice?: boolean;
  handleSubmitFilterForm: Function;
}

const FilterForm = (props: FilterFormProps) => {
  const { haveName, haveProvince, havePrice, handleSubmitFilterForm } = props;

  const [formData, setFormData] = useState<InputFilter>();

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

  const marks: Mark[] = [
    {
      value: 0,
      label: "< 200k",
    },
    {
      value: 33,
      label: "200k - 300k",
    },
    {
      value: 66,
      label: "300k - 400k",
    },
    {
      value: 100,
      label: "> 400k",
    },
  ];

  const onPriceChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    let price: PriceRangeType = {};
    switch (value) {
      case 0:
        price = {
          maxPrice: 200000,
        };
        break;
      case 33:
        price = {
          minPrice: 200000,
          maxPrice: 300000,
        };
        break;
      case 66:
        price = {
          minPrice: 300000,
          maxPrice: 400000,
        };
        break;
      case 100:
        price = {
          minPrice: 4000000,
        };
        break;
      default:
    }
    setFormData({
      ...formData,
      price,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitFilterForm(formData);
      }}
    >
      {haveName && (
        <Input
          size="lg"
          label="Tìm kiếm theo tên"
          onChange={(e: any) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      )}
      {haveProvince && (
        <div className="mt-5">
          <Select
            label="Chọn tỉnh/thành phố"
            menuProps={{ className: "h-48" }}
            onChange={(value: any) =>
              setFormData({
                ...formData,
                province: value,
              })
            }
          >
            {provinces.map(({ name }: any) => (
              <Option key={name} value={name}>
                {name}
              </Option>
            ))}
          </Select>
        </div>
      )}
      {havePrice && (
        <div className="select-price mt-5">
          <Typography variant="h6">Chọn mức giá</Typography>
          <p className="italic text-sm text-red-500 ">
            Lưu ý: đơn vị "k" tức là "nghìn đồng"
          </p>
          <p className="italic text-sm text-red-500 ">
            Ví dụ: 100k là 100.000 VNĐ
          </p>
          <Box className="w-full pr-4 pl-4">
            <Slider
              track={false}
              aria-label="Restricted values"
              defaultValue={0}
              step={null}
              marks={marks}
              onChange={onPriceChange}
            />
          </Box>
        </div>
      )}
      <Button
        className="mt-6 flex justify-center items-center gap-2"
        fullWidth
        type="submit"
      >
        <FaHandPointRight size={17} />
        Áp dụng
      </Button>
    </form>
  );
};

export default FilterForm;
