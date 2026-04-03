import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl shadow w-full overflow-x-auto transition-colors">
      <h2 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Monthly Trend</h2>

      <div className="min-w-[320px] flex justify-center">
        <LineChart width={500} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="expense" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineChartComponent;