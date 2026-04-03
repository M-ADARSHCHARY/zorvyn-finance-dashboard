import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626", "#7c3aed", "#0ea5e9"];

const PieChartComponent = ({ data }) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl shadow w-full transition-colors">
      <h2 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Spending Breakdown</h2>

      <div className="h-[260px] w-full select-none" onMouseDown={(e) => e.preventDefault()}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart accessibilityLayer={false}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={85}
              rootTabIndex={-1}
              tabIndex={-1}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              cursor={false}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.15)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;