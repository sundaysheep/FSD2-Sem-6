import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Math: 85, Science: 78, English: 92 },
  { month: "Feb", Math: 88, Science: 82, English: 90 },
  { month: "Mar", Math: 90, Science: 85, English: 94 },
  { month: "Apr", Math: 87, Science: 80, English: 91 },
  { month: "May", Math: 92, Science: 88, English: 95 },
  { month: "Jun", Math: 89, Science: 84, English: 93 },
];

export default function AttendanceChart() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center" }}>Student Attendance by Subject (%)</h2>

      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="Math"
            stroke="#8884d8"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="Science"
            stroke="#82ca9d"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="English"
            stroke="#ff7300"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
 