import { TaskStatus } from "../interfaces/Task";

//Hàm lấy màu chữ dựa vào trạng thái của Task
export const getStatusTextColor = (status: TaskStatus): string => {
  const textColors = {
    [TaskStatus.Todo]: "text-[#6495ED]",
    [TaskStatus.InProgress]: "text-yellow-400",
    [TaskStatus.Done]: "text-green-500",
    [TaskStatus.All]: "text-gray-700",
  };

  return textColors[status] || "text-gray-500";
};

//Hàm lấy màu background dựa vào trạng thái của Task
export const getStatusBgColor = (status: TaskStatus): string => {
  const bgColors = {
    [TaskStatus.Todo]: "bg-[#6495ED]",
    [TaskStatus.InProgress]: "bg-yellow-400",
    [TaskStatus.Done]: "bg-green-500",
    [TaskStatus.All]: "bg-gray-700",
  };

  return bgColors[status] || "bg-gray-500";
};

//Hàm lấy màu border dựa vào trạng thái của Task
export const getStatusBorderColor = (status: TaskStatus): string => {
  const borderColors = {
    [TaskStatus.Todo]: "border-[#6495ED]",
    [TaskStatus.InProgress]: "border-yellow-400",
    [TaskStatus.Done]: "border-green-500",
    [TaskStatus.All]: "border-gray-700",
  };

  return borderColors[status] || "border-gray-500";
};
