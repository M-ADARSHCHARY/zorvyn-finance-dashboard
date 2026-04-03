import { PieChart, Pie, Tooltip } from "recharts";

const PieChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl shadow w-full overflow-x-auto transition-colors">
      <h2 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Spending Breakdown</h2>

      <div className="min-w-[280px] flex justify-center">
        <PieChart width={400} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;