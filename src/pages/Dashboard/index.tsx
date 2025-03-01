import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getDashboard } from "../../services/dashboardService";
import { DashboardType } from "../../interfaces/Dashboard";
import Employee from "../../components/ChartItem/Employee";
import Revenue from "../../components/ChartItem/Revenue";
import Loading from "../../components/common/Loading";

const Dashboard = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dashboard, setDashboard] = useState<DashboardType[]>([]);

  //Gọi dữ liệu của dashboard
  const fetchDashboard = async () => {
    const data = await getDashboard();
    if (data) {
      setDashboard(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDashboard();
  }, []);

  return (
    <div
      onClick={() => navigation("/")}
      className="min-h-[100vh] bg-[#E9F2FE] p-4 w-full"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <button className="px-4 py-3 bg-[#1E90FF] text-white">
            Todo List
          </button>
          <div className="flex flex-col md:flex-row mt-4">
            <Revenue data={dashboard[0]?.revenue ?? []} />
            <Employee data={dashboard[0]?.employee ?? []} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
