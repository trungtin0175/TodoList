import closeIcon from "../../assets/icons/close.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import plusIcon from "../../assets/icons/plus.svg";

interface Props {
  isOpenModal: boolean;
  onClose: () => void;
}

const ModalTodo = ({ isOpenModal, onClose }: Props) => {
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
        className="max-w-[500px] min-w-[300px] min-h-[300px] rounded-2xl bg-white border-2 border-[#6495ED]"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-center flex-1 justify-center text-[#6495ED] py-2 font-semibold">
            Học ReactJS
          </h3>
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
          <div className="flex items-start px-1 py-2">
            <input type="checkbox" className="mt-2" />
            <p className="text-gray-700 ms-2">
              sdfgb skgjsdf sdfbg jsdfjksd jks djkhgsd bdjskg k
            </p>
            <img
              alt="delete"
              src={deleteIcon}
              className="w-4 cursor-pointer me-3"
            ></img>
          </div>
        </div>
        <div className="flex items-center flex-row-reverse">
          <button className="flex items-center cursor-pointer mx-2 bg-[#3CB371]">
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            New
          </button>
          <button className="flex items-center cursor-pointer mx-2 bg-[#3CB371]">
            <img alt="plus" src={plusIcon} className="me-2 w-5"></img>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTodo;
