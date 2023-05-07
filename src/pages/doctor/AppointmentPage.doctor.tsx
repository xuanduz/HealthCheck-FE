import { Input } from "@material-tailwind/react";
import TableComponent from "../../components/table/TableComponent";

const AppointmentPageDoctor = () => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <form>
        <div className="w-1/4 mb-5">
          <Input
            size="md"
            label="Chọn ngày"
            type="date"
            onChange={(e: any) => console.log("change", e.target.value)}
            min={today}
            defaultValue={today}
          />
        </div>
        <div>
          <TableComponent title="Danh sách bệnh nhân" />
        </div>
      </form>
    </div>
  );
};

export default AppointmentPageDoctor;
