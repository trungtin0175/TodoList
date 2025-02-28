import { useState } from "react";
import filterIcon from "../../assets/icons/filter.svg";
import plusIcon from "../../assets/icons/plus.svg";
import searchIcon from "../../assets/icons/search.svg";
import TodoItem from "../../components/TodoItem";

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);

  return (
    <div className="min-h-[100vh] bg-[#E9F2FE] p-4">
      <div className="flex justify-between items-center w-full mx-auto max-w-[90vw]">
        <button className="px-4 py-3 bg-[#1E90FF] text-white">Dashboard</button>

        <div className="flex items-center justify-end gap-x-4 text-white">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition">
            <img alt="search" src={searchIcon} className="w-5 h-5" />
            <input
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
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    📌 Todo
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    🔄 In Process
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    ✅ Done
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button className="flex items-center cursor-pointer mx-2 bg-[#3CB371]">
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            New
          </button>
        </div>
      </div>

      <div className="flex items-center mt-5 max-w-[100vw] overflow-x-auto pb-3">
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
        <div className="me-4">
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default Home;
