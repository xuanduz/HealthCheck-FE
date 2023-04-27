import { Button, Card, Typography } from "@material-tailwind/react";
import SmallContainerComponent from "../../components/SmallContainerComponent";
import { Avatar } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-blue-50 flex justify-center">
        <div className="w-8/12 booking-title relative pt-10 pb-10 flex items-center">
          <div
            className="z-10 p-2 basis-1/6"
            role="button"
            onClick={() => navigate(-1)}
          >
            <Typography variant="h5" className="flex gap-2 items-center">
              <BiArrowBack /> Trở lại
            </Typography>
          </div>
          <Typography variant="h2" className="text-center basis-4/6">
            Đặt lịch khám chuyên gia
          </Typography>
        </div>
      </div>
      <SmallContainerComponent>
        <div className="introduce flex justify-between">
          <div className="flex gap-4">
            <div className="relative">
              <Avatar
                alt="doctor"
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
                sx={{ width: 200, height: 200 }}
              />
            </div>
            <div>
              <Typography variant="h2">Lorem, ipsum dolor.</Typography>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="simple_info basis-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus officia voluptatem officiis! Tenetur expedita, saepe,
            delectus at asperiores nulla dolores dicta quis esse quaerat quasi
            adipisci molestiae porro animi totam deserunt. Voluptatibus quis
            laborum ratione aspernatur. Maiores porro error ipsa. Vitae,
            blanditiis maiores nobis ipsa sint perspiciatis optio accusantium
            iure!
          </div>
          <div className="flex flex-col gap-4 basis-1/2">
            <Card className="schedule p-4">
              <form>
                <div></div>
                <Button className="w-full">Đặt lịch ngay</Button>
              </form>
            </Card>

            <div>
              <Typography variant="h5" className="mb-2">
                Chuyên gia tương tự
              </Typography>
            </div>
          </div>
        </div>
      </SmallContainerComponent>
    </div>
  );
};

export default BookingPage;
