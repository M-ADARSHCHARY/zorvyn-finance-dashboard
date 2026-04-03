import { useState } from "react";
import TransactionTable from "../components/TransactionTable";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, setType, setSort } from "../redux/transaction/transactionSlice";
import AddTransactionModal from "../components/AddTransactionModel";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const {search, type, sort, transactions} = useSelector((state) => state.transactions)
    const dispatch = useDispatch()
    
    const filteredData = transactions.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = type === "all" || t.type === type;

    return matchesSearch && matchesType;
  });

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
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          <option value="latest">Latest</option>
          <option value="amount">Highest Amount</option>
        </select>
      </div>

      <TransactionTable data={sortedData} setShowModal={setShowModal}/>

      {showModal && (
        <AddTransactionModal close={()=>{setShowModal(!showModal)}}/>
      )}
      
    </div>
  );
};

export default Transactions;
