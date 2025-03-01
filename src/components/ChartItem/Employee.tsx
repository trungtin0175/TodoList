import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { EmployeeType } from "../../interfaces/Dashboard";

interface ItemProps {
  data: EmployeeType[];
}

const Employee: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded md:w-[50%] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#10b981"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <h2 className="text-lg font-semibold mt-3 text-center">
        Number of employees (24 months)
      </h2>
    </div>
  );
};

export default Employee;
