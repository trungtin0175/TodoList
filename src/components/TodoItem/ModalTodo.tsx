import { useState } from "react";
import { Subtask, Task } from "../../interfaces/Task";
import { createTask, updateTask } from "../../services/taskService";
import {
  getStatusBgColor,
  getStatusBorderColor,
  getStatusTextColor,
} from "../../utils/helper";

import closeIcon from "../../assets/icons/close.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import plusIcon from "../../assets/icons/plus.svg";
import saveIcon from "../../assets/icons/save.svg";

interface Props {
  isOpenModal: boolean;
  onClose: () => void;
  data: Task;
  refreshTasks: () => void;
}

const ModalTodo = ({ isOpenModal, onClose, data, refreshTasks }: Props) => {
  const [taskTitle, setTaskTitle] = useState<string>(data?.title);
  const [subTasks, setSubTasks] = useState<Subtask[]>(data?.subTasks || []);
  const [isSave, setIsSave] = useState<boolean>(false);

  //Hàm thay đổi nội dung của item trong Subtask
  const handleSubtaskChange = (id: number, newValue: string) => {
    setSubTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  //Hàm thay đổi trạng thái của item trong Subtask
  const handleToggleSubtask = (id: number) => {
    setSubTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  //Hàm xóa item trong Subtask
  const handleDeleteSubtask = (id: number) => {
    setSubTasks(subTasks.filter((subtask) => subtask.id !== id));
  };

  //Hàm tạo mới item trong Subtask
  const handleAddItemSubtask = () => {
    const newSubtask: Subtask = {
      id: subTasks.length + 1,
      value: "",
      completed: false,
    };
    setSubTasks([...subTasks, newSubtask]);
  };

  //Hàm lưu lại Task sau khi thay đổi
  const handleSave = async () => {
    if (isSave) {
      return;
    }

    setIsSave(true);
    const updatedTask: Task = {
      ...data,
      title: taskTitle,
      subTasks: subTasks,
    };

    const newTask: Task = {
      title: taskTitle,
      status: 0,
      dueDate: new Date().toISOString(),
      subTasks: subTasks,
    };

    try {
      if (data?.id === 0) {
        await createTask(newTask);
      } else {
        await updateTask(updatedTask, data?.id ?? 0);
      }
      refreshTasks();
      setIsSave(false);
      onClose();
    } catch (error) {
      console.error(error);
      setIsSave(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isOpenModal
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-75"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative overflow-hidden max-w-[500px] min-w-[300px] min-h-[300px] rounded-2xl bg-white border-2 ${getStatusBorderColor(
          data?.status
        )}`}
      >
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className={`text-center flex-1 justify-center ${getStatusTextColor(
              data?.status
            )} p-2 font-semibold border-b border-gray-300 outline-none`}
          />

          <div onClick={onClose}>
            <img
              alt="close"
              src={closeIcon}
              className="w-4 cursor-pointer me-3"
            ></img>
          </div>
        </div>
        <div
          className={`w-full h-[2px] ${getStatusBgColor(data?.status)}`}
        ></div>
        <div>
          {Array.isArray(subTasks) &&
            subTasks.length > 0 &&
            subTasks.map((subtaskItem) => (
              <div
                key={subtaskItem?.id}
                className="flex items-center px-1 py-2"
              >
                <input
                  type="checkbox"
                  checked={subtaskItem?.completed}
                  onChange={() => handleToggleSubtask(subtaskItem?.id)}
                  className="mt-2"
                />
                <input
                  type="text"
                  value={subtaskItem?.value}
                  onChange={(e) =>
                    handleSubtaskChange(subtaskItem?.id, e.target.value)
                  }
                  className="text-gray-700 ms-2 border-b border-gray-300 outline-none w-full"
                />
                <img
                  alt="delete"
                  src={deleteIcon}
                  className="w-6 cursor-pointer ms-3"
                  onClick={() => handleDeleteSubtask(subtaskItem?.id)}
                />
              </div>
            ))}
        </div>
        <div className="absolute bottom-[10px] right-0 flex items-center text-white">
          <button
            onClick={handleAddItemSubtask}
            className="flex items-center cursor-pointer mx-2 bg-[#3CB371]"
          >
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            New
          </button>
          <button
            onClick={handleSave}
            className="flex items-center cursor-pointer mx-2 bg-[#3CB371]"
          >
            <img alt="plus" src={saveIcon} className="me-2 w-5"></img>
            {isSave ? "Loading.." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTodo;
