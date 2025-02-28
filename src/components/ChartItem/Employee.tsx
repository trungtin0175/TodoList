import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "2023-01", count: 50 },
  { month: "2023-02", count: 52 },
  { month: "2023-03", count: 55 },
  { month: "2023-04", count: 60 },
  { month: "2023-05", count: 65 },
  { month: "2023-06", count: 68 },
  { month: "2023-07", count: 70 },
  { month: "2023-08", count: 75 },
  { month: "2023-09", count: 80 },
  { month: "2023-10", count: 85 },
  { month: "2023-11", count: 90 },
  { month: "2023-12", count: 95 },
  { month: "2024-01", count: 100 },
  { month: "2024-02", count: 105 },
  { month: "2024-03", count: 110 },
  { month: "2024-04", count: 115 },
  { month: "2024-05", count: 120 },
  { month: "2024-06", count: 125 },
  { month: "2024-07", count: 130 },
  { month: "2024-08", count: 135 },
  { month: "2024-09", count: 140 },
  { month: "2024-10", count: 145 },
  { month: "2024-11", count: 150 },
  { month: "2024-12", count: 155 },
];

const Employee = () => {
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-lg font-semibold mb-3">
        Số lượng nhân viên (24 tháng)
      </h2>
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
    </div>
  );
};

export default Employee;
