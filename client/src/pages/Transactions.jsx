import { useEffect, useState } from "react";
import TransactionTable from "../components/TransactionTable";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  setType,
  setCategory,
  setSort,
} from "../redux/transaction/transactionSlice";
import AddTransactionModal from "../components/AddTransactionModel";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const {search, type, sort, category, transactions, role} = useSelector((state) => state.transactions)
    const [totalAmount, setTotalAmount] = useState(0)
    const dispatch = useDispatch()

  const categories = [
    "all",
    ...new Set(transactions.map((t) => t.category).filter(Boolean)),
  ];
    
    const filteredData = transactions.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = type === "all" || t.type === type;
    const matchesCategory = category === "all" || t.category === category;

    return matchesSearch && matchesType && matchesCategory;
  });

  useEffect(() => {
    const total = filteredData.reduce((sum, t) => t.type === "expense" ? sum + t.amount : sum, 0);
    setTotalAmount(total);
  }, [filteredData]);


  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "amount") {
      return b.amount - a.amount; // bigger amount first
    } else {
      return new Date(b.date) - new Date(a.date); // latest first
    }
  });

  return (
    <div className="p-4 sm:p-6 space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-2 rounded w-full sm:w-auto"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />

        <select
          className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-2 rounded w-full sm:w-auto"
          onChange={(e) => dispatch(setType(e.target.value))}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-2 rounded w-full sm:w-auto"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select
          className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-2 rounded w-full sm:w-auto"
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          <option value="latest">Latest</option>
          <option value="amount">Highest Amount</option>
        </select>
      </div>
      
      {transactions.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-6xl mb-4">💰</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">No transactions yet</h2>
          <p className="text-slate-600 dark:text-slate-400 text-center max-w-sm mb-6">
            Start tracking your finances by adding your first transaction.
          </p>
          {role === "admin" && (
            <button 
              onClick={() => setShowModal(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Add Your First Transaction
            </button>
          )}
        </div>
      ) : (
        <>
          <div>
            <h4 className="text-slate-900 dark:text-slate-100">Total Expenses: <span className="font-semibold">₹{totalAmount.toLocaleString("en-IN")}</span></h4>
          </div>
          <TransactionTable data={sortedData} setShowModal={setShowModal} transactions={transactions}/>
        </>
      )}
      
      {showModal && (
        <AddTransactionModal close={()=>{setShowModal(!showModal)}}/>
      )}
      
    </div>
  );
};

export default Transactions;
