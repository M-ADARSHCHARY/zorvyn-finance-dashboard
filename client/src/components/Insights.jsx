import react from "react"
const InsightCard = ({ title, value }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow transition-colors">
    <h3 className="text-gray-500 dark:text-slate-400 text-sm">{title}</h3>
    <p className="text-lg font-semibold mt-2 text-slate-900 dark:text-slate-100">{value}</p>
  </div>
);

const Insights = ({ topCategory, change, message }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <InsightCard title="Top Category" value={topCategory} />
      <InsightCard title="Monthly Change" value={`${change}%`} />
      <InsightCard title="Insight" value={message} />
    </div>
  );
};

export default Insights;