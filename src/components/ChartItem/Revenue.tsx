import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 2021, amount: 150000 },
  { year: 2022, amount: 180000 },
  { year: 2023, amount: 210000 },
  { year: 2024, amount: 250000 },
  { year: 2025, amount: 300000 },
];

const Revenue = () => {
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-lg font-semibold mb-3">Doanh thu công ty (5 năm)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => `${value.toLocaleString()} VND`} />
          <Bar dataKey="amount" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Revenue;
