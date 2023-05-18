import { Card, CardBody, Typography } from "@material-tailwind/react";
import AdminFormComponent from "../../components/admin/AdminFormComponent";
import { AdminType } from "../../data/types.data";

const RegisterPageAdmin = () => {
  const handleSubmitForm = (data: AdminType) => {
    console.log("handleSubmitForm", data);
  };
  return (
    <>
      <Typography variant="h3" className="">
        Đăng ký thêm tài khoản Admin
      </Typography>
      <div className="w-[350px] mt-5">
        <Card>
          <CardBody>
            <AdminFormComponent
              handleSubmitForm={handleSubmitForm}
              submitButtonContent="Đăng ký"
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RegisterPageAdmin;
