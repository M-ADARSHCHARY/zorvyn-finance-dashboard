export const calculateSummary = (transactions) => {
  let income = 0;
  let expense = 0;

  // For summary
  transactions.forEach((transaction)=>{
     if(transaction.type === "income"){
        income += transaction.amount
     }else{
        expense += transaction.amount
     }
  });

  return {
    income,
    expense,
    balance: income - expense
  };
};



// For Pie - Chart

export const getCategoryData = (transactions) => {
  const data = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      data[t.category] = (data[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(data).map((key) => ({
    name: key,
    value: data[key]
  }));
};

// For Insights Monthly data
export const getMonthlyData = (transactions) => {
  const months = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM

    if (!months[month]) {
      months[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") months[month].income += t.amount;
    else months[month].expense += t.amount;
  });

  return months;
};