import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";

export interface CardComponentProps {
  title?: string;
  price?: string;
  address?: string;
  image?: string;
  description?: string;
}

const CardComponent = (props: CardComponentProps) => {
  const { title, price, address, image, description } = props;
  return (
    <Card className="w-96 shadow-xl" role="button">
      <CardHeader color="gray" className="relative h-56">
        <img src={image} alt="img-blur-shadow" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center pb-3">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography variant="p" className="mb-2 text-black">
          {description}
        </Typography>
      </CardBody>
      {/* {price && address && ( */}
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="lead" color="red" className="font-semibold">
          {price}
        </Typography>
        <Typography
          variant="lead"
          color="black"
          className="flex gap-1 text-base"
        >
          <CiLocationOn className="mt-1"></CiLocationOn>
          {address}
        </Typography>
      </CardFooter>
      {/* )} */}
    </Card>
  );
};

export default CardComponent;
