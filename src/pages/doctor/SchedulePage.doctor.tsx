import { Button, Input } from "@material-tailwind/react";
import TimeSlotComponent from "../../components/timeSlot/TimeSlotComponent";
import TimeListComponent from "../../components/timeSlot/TimeListComponent";
import { TimeSlotType } from "../../data/time-slot.data";
import { useEffect, useState } from "react";

export interface ScheduleType {
  date: string;
  listTime: TimeSlotType[];
}

const SchedulePageDoctor = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [timeSlotData, setTimeSlotData] = useState<TimeSlotType[]>([] as any);

  useEffect(() => {
    setTimeSlotData([
      {
        label: "8:00 - 8:30",
        value: "8:00 - 8:30",
        check: false,
      },
      {
        label: "8:30 - 9:00",
        value: "8:30 - 9:00",
        check: false,
      },
      {
        label: "9:00 - 9:30",
        value: "9:00 - 9:30",
        check: false,
      },
      {
        label: "9:30 - 10:00",
        value: "9:30 - 10:00",
        check: false,
      },
      {
        label: "10:00 - 10:30",
        value: "10:00 - 10:30",
        check: false,
      },
    ]);
  }, []);

  const handleSelectTime = (idx: number) => {
    let newTimeSlot = timeSlotData.map((time: TimeSlotType, index: number) =>
      index != idx
        ? time
        : {
            ...time,
            check: !timeSlotData[index].check,
          }
    );
    setTimeSlotData(newTimeSlot);
  };

  return (
    <div>
      <form>
        <div className="w-1/4 mb-2">
          <Input
            size="md"
            label="Chọn ngày"
            type="date"
            onChange={(e: any) => console.log("change", e.target.value)}
            min={today}
            defaultValue={today}
          />
        </div>
        <p className="text-red-500 mb-4">
          Chú ý: Bác sĩ nên xét lịch trước dưới 7 ngày để đảm bảo độ chính xác !
        </p>
        <TimeListComponent
          timeSlotData={timeSlotData}
          handleSelectTime={handleSelectTime}
        ></TimeListComponent>
        <Button type="submit" className="mt-5">
          Lưu thông tin
        </Button>
      </form>
    </div>
  );
};

export default SchedulePageDoctor;
