import { useState } from "react";
import ModalTodo from "./ModalTodo";
import dotsIcon from "../../assets/icons/dots.svg";

const TodoItem = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className="cursor-pointer w-[200px] min-h-[300px] rounded-2xl bg-white border-2 border-[#6495ED]"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-center flex-1 justify-center text-[#6495ED] py-2 font-semibold">
            Học ReactJS
          </h3>
          <div className="relative" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <img
              alt="close"
              src={dotsIcon}
              className="w-4 cursor-pointer me-3"
            ></img>
            {isOpenMenu && (
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
        </div>
        <div className="w-full h-[2px] bg-[#6495ED]"></div>
        <div className="max-h-[400px] overflow-y-scroll">
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <ModalTodo onClose={handleCloseModal} isOpenModal={isOpenModal} />
      )}
    </>
  );
};

export default TodoItem;
