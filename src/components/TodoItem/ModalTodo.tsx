import { useState } from "react";
import { Subtask, Task } from "../../interfaces/Task";
import { createTask, updateTask } from "../../services/taskService";
import closeIcon from "../../assets/icons/close.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import plusIcon from "../../assets/icons/plus.svg";

interface Props {
  isOpenModal: boolean;
  onClose: () => void;
  data: Task;
}

const ModalTodo = ({ isOpenModal, onClose, data }: Props) => {
  const [taskTitle, setTaskTitle] = useState<string>(data?.title);
  const [subTasks, setSubTasks] = useState<Subtask[]>(data?.subTasks || []);
  const handleSubtaskChange = (id: number, newValue: string) => {
    setSubTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };
  const handleToggleSubtask = (id: number) => {
    setSubTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const handleDeleteSubtask = (id: number) => {
    setSubTasks(subTasks.filter((subtask) => subtask.id !== id));
  };
  const handleAddItemSubtask = () => {
    const newSubtask: Subtask = {
      id: subTasks.length + 1,
      value: "",
      completed: false,
    };
    setSubTasks([...subTasks, newSubtask]);
  };
  const handleSave = async () => {
    const updatedTask: Task = {
      ...data,
      title: taskTitle,
      subTasks: subTasks,
    };
    const newTask: Task = {
      id: "",
      title: taskTitle,
      status: 0,
      dueDate: new Date().toISOString(),
      subTasks: subTasks,
    };
    try {
      if (data?.id === "") {
        await createTask(newTask);
      } else {
        await updateTask(updatedTask, data?.id);
      }
      onClose();
    } catch (error) {
      console.error(error);
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
        className="relative max-w-[500px] min-w-[300px] min-h-[300px] rounded-2xl bg-white border-2 border-[#6495ED]"
      >
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-center flex-1 justify-center text-[#6495ED] py-2 font-semibold"
          />

          <div onClick={onClose}>
            <img
              alt="close"
              src={closeIcon}
              className="w-4 cursor-pointer me-3"
            ></img>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#6495ED]"></div>
        <div>
          {/* <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
            <img
              alt="delete"
              src={deleteIcon}
              className="w-4 cursor-pointer me-3"
            ></img>
          </div> */}
          {/* {subTasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center px-1 py-2">
              <input
                type="checkbox"
                checked={subtask.completed}
                className="mt-2"
              />
              <input
                type="text"
                value={subtask?.value}
                onChange={(e) =>
                  handleSubtaskChange(subtask.id, e.target.value)
                }
                className="text-gray-700 ms-2 border-b border-gray-300 outline-none w-full"
              />
              <img
                alt="delete"
                src={deleteIcon}
                className="w-4 cursor-pointer me-3"
              />
            </div>
          ))} */}
          {Array.isArray(subTasks) &&
            subTasks.length > 0 &&
            subTasks.map((subtaskItem) => (
              <div key={subtaskItem.id} className="flex items-center px-1 py-2">
                <input
                  type="checkbox"
                  checked={subtaskItem.completed}
                  onChange={() => handleToggleSubtask(subtaskItem.id)}
                  // onChange={() =>
                  //   setSubTasks((prev) =>
                  //     prev.map((item) =>
                  //       item.id === subtaskItem.id
                  //         ? { ...item, completed: !item.completed }
                  //         : item
                  //     )
                  //   )
                  // }
                  className="mt-2"
                />
                <input
                  type="text"
                  value={subtaskItem.value}
                  onChange={(e) =>
                    handleSubtaskChange(subtaskItem.id, e.target.value)
                  }
                  className="text-gray-700 ms-2 border-b border-gray-300 outline-none w-full"
                />
                <img
                  alt="delete"
                  src={deleteIcon}
                  className="w-4 cursor-pointer me-3"
                  onClick={() => handleDeleteSubtask(subtaskItem.id)}
                />
              </div>
            ))}
        </div>
        <div className="absolute bottom-0 right-0 flex items-center">
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
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTodo;
