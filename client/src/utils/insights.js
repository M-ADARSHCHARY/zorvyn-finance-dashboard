// Highest Spending Category

export const getTopCategory = (transactions) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "";
  let maxAmount = 0;

  for (let cat in categoryMap) {
    if (categoryMap[cat] > maxAmount) {
      maxAmount = categoryMap[cat];
      maxCategory = cat;
    }
  }

  return maxCategory;
};



export const getMonthlyComparison = (transactions) => {
  const monthly = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthly[month]) {
      monthly[month] = 0;
    }

    if (t.type === "expense") {
      monthly[month] += t.amount;
    }
  });

  const months = Object.keys(monthly).sort();

  if (months.length < 2) return 0;

  const last = monthly[months[months.length - 1]];
  const prev = monthly[months[months.length - 2]];

  const denominator = (Math.abs(last) + Math.abs(prev)) / 2;

  if (denominator === 0) return 0;

  const balancedChange = ((last - prev) / denominator) * 100;

  return Number(balancedChange.toFixed(1));
};

export const getInsightMessage = (change) => {
  if (change > 10) return "Spending increased significantly 📈";
  if (change > 0) return "Spending slightly increased";
  if (change < 0) return "Good job! Spending decreased 📉";
  return "Spending is stable";
};