import { useState } from "react";
import { TimeSlotType } from "../../data/time-slot.data";

export interface TimeSlotComponentProps {
  data: TimeSlotType;
  handleSelectTime: Function;
  idx: number;
}

const TimeSlotComponent = (props: TimeSlotComponentProps) => {
  const { data, handleSelectTime, idx } = props;

  return (
    <>
      <label
        role="button"
        className={`p-3 border-2 rounded-md bg-gray-300 ${
          data.check ? "border-black bg-yellow-800" : ""
        }`}
      >
        <input
          type="checkbox"
          value={data.value}
          className="hidden"
          checked={data.check}
          onChange={(e: any) => handleSelectTime(idx)}
        />
        {data.label}
      </label>
    </>
  );
};

export default TimeSlotComponent;
