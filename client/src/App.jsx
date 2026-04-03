import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex min-h-screen flex-col md:flex-row bg-gray-100 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        <SideBar theme={theme} />

        <div className="flex-1 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
