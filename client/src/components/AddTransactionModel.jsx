import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/transaction/transactionSlice";

const AddTransactionModal = ({ close }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      ...form,
      amount: Number(form.amount),
      date: new Date().toISOString().slice(0, 10),
    };

    dispatch(addTransaction(newTransaction));
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end sm:items-center justify-center z-50 p-4">
      
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-xl shadow-lg w-full sm:w-[90%] max-w-md transition-colors">
        <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Title"
            className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <input
            type="number"
            placeholder="Amount"
            className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-2 rounded"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />

          <select
            className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-2 rounded"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            type="text"
            placeholder="Category"
            className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-2 rounded"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />

          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded"
            >
              Cancel
            </button>

            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;