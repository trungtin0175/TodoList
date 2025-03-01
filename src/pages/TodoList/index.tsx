import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TodoItem from "../../components/TodoItem";
import ModalTodo from "../../components/TodoItem/ModalTodo";
import { getListTasks } from "../../services/taskService";
import { Task, TaskStatus } from "../../interfaces/Task";

import filterIcon from "../../assets/icons/filter.svg";
import plusIcon from "../../assets/icons/plus.svg";
import searchIcon from "../../assets/icons/search.svg";
import Loading from "../../components/common/Loading";

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigate();

  //Hàm đóng modal
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  //Hàm gọi api danh sách Task
  const fetchTasks = async () => {
    const data = await getListTasks();
    if (data) {
      setTasks(data);
      setFilterTasks(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTasks();
  }, []);

  //Hàm tìm kiếm Task dựa trên title của Task và value của Subtasks
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilterTasks(tasks);
    } else {
      const filtered = tasks.filter(
        (task) =>
          task?.title.toLowerCase().includes(value) ||
          (Array.isArray(task?.subTasks) &&
            task?.subTasks?.length > 0 &&
            task.subTasks.some((itemSubTask) =>
              itemSubTask?.value.toLowerCase().includes(value)
            ))
      );
      setFilterTasks(filtered);
    }
  };

  //Hàm lọc Task dựa trên trạng thái của Task
  const handleFilter = (status: TaskStatus) => {
    setFilterTasks(
      status === 3 ? tasks : tasks.filter((item) => item?.status === status)
    );
    setIsOpenFilter(false);
  };

  return (
    <div className="min-h-[100vh] bg-[#E9F2FE] p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:justify-between items-center w-full mx-auto">
            <div className="w-full flex justify-start md:justify-start mb-3 md:mb-0">
              <button
                onClick={() => navigation("/dashboard")}
                className="px-4 py-3 bg-[#1E90FF] text-white"
              >
                Dashboard
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-end gap-x-4 text-white">
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
                <img alt="search" src={searchIcon} className="w-5 h-5" />
                <input
                  value={searchTerm}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search title ...."
                  className="md:min-w-[200px] ml-2 w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center">
                <div className="relative my-5 md:my-0">
                  <button
                    onClick={() => setIsOpenFilter(!isOpenFilter)}
                    className="flex items-center cursor-pointer mx-2 bg-[#3CB371] md:min-w-[100px]"
                  >
                    <img
                      alt="filter"
                      src={filterIcon}
                      className="me-2 w-5"
                    ></img>
                    <p>Filter</p>
                  </button>
                  {isOpenFilter && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                      <ul className="text-gray-700">
                        <li
                          onClick={() => handleFilter(TaskStatus.All)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <div className="w-3 h-3 rounded-full bg-[#ccc] me-2"></div>
                          <p>All</p>
                        </li>
                        <li
                          onClick={() => handleFilter(TaskStatus.Todo)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <div className="w-3 h-3 rounded-full bg-[#6495ED] me-2"></div>
                          <p>Todo</p>
                        </li>
                        <li
                          onClick={() => handleFilter(TaskStatus.InProgress)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <div className="w-3 h-3 rounded-full bg-yellow-400 me-2"></div>
                          <p>In Process</p>
                        </li>
                        <li
                          onClick={() => handleFilter(TaskStatus.Done)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        >
                          <div className="w-3 h-3 rounded-full bg-green-500 me-2"></div>
                          <p>Done</p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsOpenModal(true)}
                  className="flex items-center cursor-pointer mx-2 bg-[#3CB371] md:min-w-[100px]"
                >
                  <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
                  New
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-5 max-w-[100vw] overflow-x-auto pb-3">
            {Array.isArray(filterTasks) && filterTasks?.length > 0 ? (
              filterTasks?.map((item) => (
                <div key={item?.id} className="me-4">
                  <TodoItem refreshTasks={fetchTasks} data={item} />
                </div>
              ))
            ) : (
              <h1 className="text-center">Add your to do list</h1>
            )}
          </div>
          {isOpenModal && (
            <ModalTodo
              onClose={handleCloseModal}
              isOpenModal={isOpenModal}
              data={{
                id: 0,
                title: "",
                status: 0,
                dueDate: "",
                subTasks: [],
              }}
              refreshTasks={fetchTasks}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Todo;
