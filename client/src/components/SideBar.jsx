import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-gray-900 dark:bg-slate-900 text-white p-4 sm:p-5 md:w-64 w-full border-b md:border-b-0 md:border-r border-gray-800 dark:border-slate-800 transition-colors">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 md:mb-8">Finance</h1>

      <nav className="flex flex-wrap md:flex-col gap-3 md:gap-4">
        <Link to="/" className="hover:text-blue-400 w-full md:w-auto">Dashboard</Link>
        <Link to="/transactions" className="hover:text-blue-400 w-full md:w-auto">Transactions</Link>
      </nav>
    </div>
  );
};

export default SideBar;