import { transactions } from "../data/transactions";
import SummaryCards from "../components/SummaryCards";
import LineChartComponent from "../components/LineChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import Insights from "../components/Insights";

import {
  calculateSummary,
  getCategoryData,
  getMonthlyData,
} from "../utils/financeUtils";

import {
  getTopCategory,
  getMonthlyComparison,
  getInsightMessage,
} from "../utils/insights";

const Dashboard = () => {
  const summary = calculateSummary(transactions);

  const categoryData = getCategoryData(transactions);

  const monthlyRaw = getMonthlyData(transactions);

  const monthlyData = Object.keys(monthlyRaw).map((month) => ({
    month,
    ...monthlyRaw[month],
  }));

  const topCategory = getTopCategory(transactions);
  const change = getMonthlyComparison(transactions);
  const message = getInsightMessage(change);

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <SummaryCards summary={summary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <LineChartComponent data={monthlyData} />
        <PieChartComponent data={categoryData} />
      </div>

      <Insights topCategory={topCategory} change={change} message={message} />
    </div>
  );
};

export default Dashboard;
