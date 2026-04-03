import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/transaction/transactionSlice";

const Navbar = ({ theme, toggleTheme }) => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.transactions.role);

  const roles = [
    { value: "viewer", label: "Viewer" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 shadow px-4 py-3 sm:px-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center transition-colors">
      <h1 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">FinPulse</h1>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={toggleTheme}
          className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
        >
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>

        <span className="text-sm text-gray-500 dark:text-slate-400 whitespace-nowrap">Role</span>

        <div className="inline-flex rounded-full bg-gray-100 dark:bg-slate-800 p-1 shadow-inner w-full sm:w-auto">
          {roles.map((item) => {
            const active = role === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => dispatch(setRole(item.value))}
                aria-pressed={active}
                className={`flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  active
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;