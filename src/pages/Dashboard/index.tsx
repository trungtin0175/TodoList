import Employee from "../../components/ChartItem/Employee";
import Revenue from "../../components/ChartItem/Revenue";

const Dashboard = () => {
  return (
    <div className="min-h-[100vh] bg-[#E9F2FE] p-4 w-full">
      <button className="px-4 py-3 bg-[#1E90FF] text-white">Todo</button>
      <div className="flex flex-col md:flex-row mt-4">
        <Revenue />
        <Employee />
      </div>
    </div>
  );
};

export default Dashboard;
