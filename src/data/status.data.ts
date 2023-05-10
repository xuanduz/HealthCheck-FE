export const getLabelStatus = (status: string | undefined) => {
  switch (status) {
    case "S1":
      return "Lịch hẹn mới";
    case "S2":
      return "Đã xác nhận";
    case "S3":
      return "Đã khám xong";
    case "S4":
      return "Đã huỷ";
    default:
      return "Chưa xác định";
  }
};

export const getColorStatus = (status: string | undefined) => {
  switch (status) {
    case "S1":
      return "amber";
    case "S2":
      return "blue";
    case "S3":
      return "green";
    case "S4":
      return "red";
    default:
      return "purple";
  }
};

export const listStatus = [
  {
    name: "Lịch hẹn mới",
    value: "S1",
  },
  {
    name: "Đã xác nhận",
    value: "S2",
  },
  {
    name: "Đã khám xong",
    value: "S3",
  },
  {
    name: "Đã huỷ",
    value: "S4",
  },
];
