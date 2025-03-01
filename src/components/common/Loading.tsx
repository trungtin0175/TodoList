import loadingGif from "../../assets/img/loading.gif";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center size-full opacity-90 z-50">
      <img alt="loading" src={loadingGif} className="w-10 h-10"></img>
    </div>
  );
};

export default Loading;
