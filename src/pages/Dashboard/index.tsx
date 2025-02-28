import { useNavigate } from "react-router";
import Employee from "../../components/ChartItem/Employee";
import Revenue from "../../components/ChartItem/Revenue";
import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";
import { DashboardType } from "../../interfaces/Dashboard";

const Dashboard = () => {
  const navigation = useNavigate();
  const [dashboard, setDashboard] = useState<DashboardType[]>([]);
  useEffect(() => {
    const fetchDashboard = async () => {
      const data = await getDashboard();
      setDashboard(data);
    };
    fetchDashboard();
  }, []);
  console.log(dashboard);
  return (
    <div
      onClick={() => navigation("/")}
      className="min-h-[100vh] bg-[#E9F2FE] p-4 w-full"
    >
      <button className="px-4 py-3 bg-[#1E90FF] text-white">Todo List</button>
      <div className="flex flex-col md:flex-row mt-4">
        <Revenue data={dashboard[0]?.revenue ?? []} />
        <Employee data={dashboard[0]?.employee ?? []} />
      </div>
    </div>
  );
};

export default Dashboard;
