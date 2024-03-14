export const convertDateTimeToText = (timestamp: number) => {
  const dateObject = new Date(timestamp * 1000);

  // Mảng chứa tên viết tắt của các ngày trong tuần
  const daysOfWeekAbbreviation = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  // Lấy giá trị của ngày trong tuần (0 - 6)
  const dayIndex = dateObject.getDay();

  // Lấy tên viết tắt của thứ từ mảng daysOfWeekAbbreviation
  const dayAbbreviation = daysOfWeekAbbreviation[dayIndex];

  return dayAbbreviation;
};

export const convertDTToHour = (timestamp: number) => {
  const dateObject = new Date(timestamp * 1000); // Nhân 1000 để chuyển từ giây sang mili giây

  // Lấy tên của thứ trong tuần (Sunday - Saturday)
  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });

  // Lấy giờ và định dạng AM/PM
  const formattedTime = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return dayOfWeek + " " + formattedTime;
};

const baiTap = () => {
  let x = 1;
  while (x > 0) {
    if (7 / x - x / 4 - 10 / x < 0) {
      return x;
    }
    x++;
  }
};
