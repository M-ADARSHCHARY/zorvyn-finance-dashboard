import React from "react"


const Card = ({ title, value }) => (
  <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow transition-colors">
    <h2 className="text-gray-500 dark:text-slate-400">{title}</h2>
    <p className="text-2xl font-bold mt-2 text-slate-900 dark:text-slate-100">₹{value}</p>
  </div>
);

const SummaryCards = ({ summary }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
      <Card title="Balance" value={summary.balance} />
      <Card title="Income" value={summary.income} />
      <Card title="Expenses" value={summary.expense} />
    </div>
  );
};

export default SummaryCards;