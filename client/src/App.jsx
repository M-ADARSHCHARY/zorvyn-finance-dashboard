import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import SideBar from "./components/SideBar";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        <div className="flex-1 flex flex-col md:flex-row">
          <SideBar theme={theme} />

          <div className="flex-1 min-h-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
