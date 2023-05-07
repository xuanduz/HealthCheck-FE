import { TimeSlotType } from "../../data/time-slot.data";
import TimeSlotComponent from "./TimeSlotComponent";

const TimeListComponent = (props: any) => {
  const { timeSlotData, handleSelectTime } = props;
  return (
    <div className="flex flex-wrap gap-4">
      {timeSlotData.map((data: TimeSlotType, index: number) => (
        <TimeSlotComponent
          key={index}
          data={data}
          handleSelectTime={handleSelectTime}
          idx={index}
        />
      ))}
    </div>
  );
};

export default TimeListComponent;
