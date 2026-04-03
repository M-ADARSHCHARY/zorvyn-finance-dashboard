import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../redux/transaction/transactionSlice";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";

const TransactionTable = ({ data, setShowModal }) => {
  const { role } = useSelector((state) => state.transactions);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
    toast.success("Transaction deleted");
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-xl shadow overflow-hidden transition-colors">
      <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">Transactions</h2>

      {role === "admin" ? (
        <button onClick={()=>{setShowModal(true)}} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto justify-center sm:justify-start mb-4">
          <FiPlus size={18} />
          Add Transaction
        </button>
      ) : (
        <p className="text-sm text-red-500 dark:text-red-400 mb-2">* You have view-only access</p>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-slate-800 dark:text-slate-200">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 text-sm">
              <th className="p-3">Date</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>

              {role === "admin" && <th className="p-3">Actions</th>}
            </tr>
          </thead>

          <tbody className="text-sm">
            {data.map((t) => (
              <tr
                key={t.id}
                className="bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition rounded-lg"
              >
                <td className="p-3 whitespace-nowrap first:rounded-l-lg">{t.date}</td>

                <td className="p-3">{t.title}</td>

                <td className="p-3">{t.category}</td>

                <td className="p-3 capitalize">{t.type}</td>

                <td
                  className={`p-3 font-medium whitespace-nowrap ${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₹{t.amount}
                </td>

                {role === "admin" && (
                  <td className="p-3 last:rounded-r-lg">
                    <div className="flex gap-3 items-center">
                      <button
                        title="edit"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                      >
                        <FiEdit size={18} className="text-blue-500" />
                      </button>

                      <button
                        title="delete"
                        onClick={() => handleDelete(t.id)}
                        className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition"
                      >
                        <FiTrash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
