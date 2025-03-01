import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { RevenueType } from "../../interfaces/Dashboard";

interface ItemProps {
  data: RevenueType[];
}

const Revenue: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded md:w-[50%] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => `${value.toLocaleString()} VND`} />
          <Bar dataKey="amount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
      <h2 className="text-lg font-semibold mt-3 text-center">
        Company revenue (5 years)
      </h2>
    </div>
  );
};

export default Revenue;
