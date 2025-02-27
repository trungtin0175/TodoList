import { useState } from "react";
import ModalTodo from "./ModalTodo";

const TodoItem = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div
        onClick={() => setIsOpenModal(true)}
        className="cursor-pointer w-[200px] min-h-[300px] rounded-2xl bg-white border-2 border-[#6495ED]"
      >
        <h3 className="text-center text-[#6495ED] py-2 font-semibold">
          Học ReactJS
        </h3>
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
