import { useEffect, useState } from "react";
import filterIcon from "../../assets/icons/filter.svg";
import plusIcon from "../../assets/icons/plus.svg";
import searchIcon from "../../assets/icons/search.svg";
import TodoItem from "../../components/TodoItem";
import { getListTasks } from "../../services/taskService";
import { Task, TaskStatus } from "../../interfaces/Task";
import ModalTodo from "../../components/TodoItem/ModalTodo";

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getListTasks();
      setTasks(data);
      setFilterTasks(data);
    };
    fetchTasks();
  }, []);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value === "") {
      setFilterTasks(tasks);
    } else {
      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(value)
      );
      setFilterTasks(filtered);
    }
  };
  const handleFilter = (status: TaskStatus) => {
    setFilterTasks(
      status === 3 ? tasks : tasks.filter((item) => item?.status === status)
    );
  };
  return (
    <div className="min-h-[100vh] bg-[#E9F2FE] p-4">
      <div className="flex justify-between items-center w-full mx-auto max-w-[90vw]">
        <button className="px-4 py-3 bg-[#1E90FF] text-white">Dashboard</button>

        <div className="flex items-center justify-end gap-x-4 text-white">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <img alt="search" src={searchIcon} className="w-5 h-5" />
            <input
              value={searchTerm}
              onChange={handleSearch}
              type="text"
              placeholder="Search title ...."
              className="ml-2 w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpenFilter(!isOpenFilter)}
              className="flex items-center cursor-pointer mx-2 bg-[#3CB371]"
            >
              <img alt="filter" src={filterIcon} className="me-2 w-5"></img>
              <p>Filter</p>
            </button>
            {isOpenFilter && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <ul className="text-gray-700">
                  <li
                    onClick={() => handleFilter(TaskStatus.All)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    📌 All
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
            className="flex items-center cursor-pointer mx-2 bg-[#3CB371]"
          >
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            New
          </button>
        </div>
      </div>

      <div className="flex items-center mt-5 max-w-[100vw] overflow-x-auto pb-3">
        {Array.isArray(filterTasks) && filterTasks?.length > 0 ? (
          filterTasks?.map((item) => (
            <div key={item?.id} className="me-4">
              <TodoItem data={item} />
            </div>
          ))
        ) : (
          <h1 className="text-center">Add your to-dos</h1>
        )}
      </div>
      {isOpenModal && (
        <ModalTodo
          onClose={handleCloseModal}
          isOpenModal={isOpenModal}
          data={{
            id: "",
            title: "",
            status: 0,
            dueDate: "",
            subTasks: [],
          }}
        />
      )}
    </div>
  );
};

export default Todo;
