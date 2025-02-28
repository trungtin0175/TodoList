import { useState } from "react";
import { Task, TaskStatus } from "../../interfaces/Task";
import { deleteTask, updateTask } from "../../services/taskService";
import ModalTodo from "./ModalTodo";
import dotsIcon from "../../assets/icons/dots.svg";
import deleteIcon from "../../assets/icons/delete.svg";

interface ItemProps {
  data: Task;
}

const TodoItem: React.FC<ItemProps> = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [task, setTask] = useState<Task>(data);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleUpdateStatus = async (status: TaskStatus) => {
    try {
      const updatedTask = await updateTask({ ...task, status }, task?.id ?? 0);
      setTask(updatedTask);
      setIsOpenMenu(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteTask = async () => {
    try {
      const updatedTask = await deleteTask(task?.id ?? 0);
      setTask(updatedTask);
      setIsOpenMenu(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className={`cursor-pointer w-[200px] min-h-[300px] rounded-2xl bg-white border-2 overflow-hidden ${
          data?.status === 1
            ? "border-yellow-400"
            : data?.status === 2
            ? "border-green-500"
            : "border-[#6495ED]"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3
            className={`text-center px-2 flex-1 truncate justify-center ${
              data?.status === 1
                ? "text-yellow-400"
                : data?.status === 2
                ? "text-green-500"
                : "text-[#6495ED]"
            } py-2 font-semibold`}
          >
            {data?.title}
          </h3>
          <div
            className="relative"
            onClick={(e) => {
              setIsOpenMenu(!isOpenMenu);
              e.stopPropagation();
            }}
          >
            <img
              alt="close"
              src={dotsIcon}
              className="w-1 cursor-pointer me-3"
            ></img>
            {isOpenMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <ul className="text-gray-700">
                  <li
                    onClick={() => handleUpdateStatus(TaskStatus.Todo)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#6495ED] me-2"></div>
                    <p>Todo</p>
                  </li>
                  <li
                    onClick={() => handleUpdateStatus(TaskStatus.InProgress)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-yellow-400 me-2"></div>
                    <p>In Process</p>
                  </li>
                  <li
                    onClick={() => handleUpdateStatus(TaskStatus.Done)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500 me-2"></div>
                    <p>Done</p>
                  </li>
                  <li
                    onClick={handleDeleteTask}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  >
                    <img
                      alt="delete"
                      src={deleteIcon}
                      className="w-4 cursor-pointer me-1"
                    />
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-full h-[2px] ${
            data?.status === 1
              ? "bg-yellow-400"
              : data?.status === 2
              ? "bg-green-500"
              : "bg-[#6495ED]"
          }`}
        ></div>
        <div className="max-h-[400px] overflow-hidden">
          {Array.isArray(data?.subTasks) &&
            data?.subTasks?.length > 0 &&
            data?.subTasks?.map((item) => (
              <div key={item?.id} className="flex items-start px-1 py-2">
                <input
                  type="checkbox"
                  checked={item?.completed}
                  className="mt-2"
                />
                <p className="text-gray-700 ms-2">{item?.value}</p>
              </div>
            ))}
        </div>
      </div>
      {isOpenModal && (
        <ModalTodo
          onClose={handleCloseModal}
          isOpenModal={isOpenModal}
          data={data}
        />
      )}
    </>
  );
};

export default TodoItem;
