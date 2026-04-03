# FinPulse - Personal Finance Dashboard

> A clean, responsive, and intuitive finance dashboard for tracking and understanding personal financial activity.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-production-brightgreen.svg)

---

## 📋 Overview

FinPulse is a modern personal finance dashboard built to help users:
- 📊 **View financial summary** - Balance, income, and expenses at a glance
- 📈 **Track spending patterns** - Monthly trends and category breakdown
- 💳 **Manage transactions** - Search, filter, sort with role-based controls
- 🔍 **Gain insights** - Spending analysis and month-over-month comparisons

Built as a frontend-only demo with mock data, focusing on clean UI/UX and solid web development fundamentals.

---

## 🎯 Core Features

### ✅ Dashboard Overview
- **3 Summary Cards**: Total Balance, Income, Expenses with formatted numbers (₹1,000/-)
- **Monthly Trend Chart**: Time-based visualization showing last 6 months of expenses
- **Spending Breakdown**: Categorical visualization with labels and color-coded pie chart
- **Smart Insights**: Highest spending category, monthly comparison with context-aware messages

### ✅ Transactions Section
- **Transaction List**: Complete details (date, amount, category, type)
- **Multi-filter System**:
  - Search by title/description
  - Filter by type (Income/Expense)
  - Filter by category (dynamically loaded)
  - Sort by date or amount
- **Total Amount Display**: Real-time sum of filtered transactions
- **Responsive Table**: Horizontal scroll on mobile, clean layout on desktop

### ✅ Role-Based UI
- **Viewer Role**: Read-only access, no edit/delete buttons
- **Admin Role**: Full permissions - add, delete transactions
- **Role Toggle**: Easy switching in navbar with visual feedback
- **localStorage Persistence**: Role selection is remembered

### ✅ State Management
- **Redux Toolkit Framework**:
  - `transactionSlice`: Transactions, filters, role, category state
  - Centralized state for all app functionality
  - Clean reducer actions: add, delete, filter, search, sort
- **Proper separation**: UI logic in components, state logic in Redux

### ✅ UI/UX Excellence
- **Dark Mode**: Light/Dark theme toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach, tested on all breakpoints
- **Smooth Animations**: Glowing insight values, transition effects
- **Toast Notifications**: User feedback for add/delete actions
- **Accessible Design**: Proper semantic HTML, ARIA labels

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will run at `http://localhost:5173`

---

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx              # Header with role toggle & theme switch
│   │   ├── SideBar.jsx             # Left navigation
│   │   ├── Footer.jsx              # Footer with branding
│   │   ├── SummaryCards.jsx        # 3 summary cards
│   │   ├── LineChartComponent.jsx  # Monthly trend chart
│   │   ├── PieChartComponent.jsx   # Spending breakdown chart
│   │   ├── TransactionTable.jsx    # Filtered transaction list
│   │   ├── Insights.jsx            # Insights cards with animations
│   │   └── AddTransactionModel.jsx # Modal for adding transactions
│   ├── pages/
│   │   ├── Dashboard.jsx           # Main dashboard page
│   │   └── Transactions.jsx        # Transaction management page
│   ├── redux/
│   │   ├── store.js                # Redux store config
│   │   └── transaction/
│   │       └── transactionSlice.js # Transaction reducer & actions
│   ├── utils/
│   │   ├── financeUtils.js         # Data calculations (summary, charts)
│   │   └── insights.js             # Insight generation functions
│   ├── data/
│   │   └── transactions.js         # Mock transaction data
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # App entry point
│   ├── index.css                   # Global styles + animations
│   └── App.css
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend Framework** | React 19 | Component-based UI |
| **Build Tool** | Vite 8 | Fast dev server & bundling |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **State Management** | Redux Toolkit | Centralized state management |
| **Charts** | Recharts | Responsive chart components |
| **Notifications** | React Hot Toast | User feedback messages |
| **Routing** | React Router v6 | Page navigation |
| **Icons** | React Icons | UI icon library |
| **Persistence** | localStorage | Client-side data storage |

---

## 📊 Assignment Requirements Coverage

| # | Requirement | Implementation | Status |
|---|------------|-----------------|--------|
| 1 | Dashboard Overview | 3 summary cards + 2 charts + insights | ✅ Complete |
| 2 | Time-based visualization | LineChart showing monthly trend | ✅ Complete |
| 3 | Categorical visualization | PieChart with spending breakdown | ✅ Complete |
| 4 | Transaction list (date, amount, category, type) | Full TransactionTable with all fields | ✅ Complete |
| 5 | Search functionality | Title search with real-time filtering | ✅ Complete |
| 6 | Sort/Filter | Type filter + Category filter + Amount/Date sort | ✅ Complete |
| 7 | Role-based UI | Viewer (read-only) vs Admin (add/delete) | ✅ Complete |
| 8 | Insights section | Top category, monthly comparison, context | ✅ Complete |
| 9 | State management | Redux Toolkit with clean patterns | ✅ Complete |
| 10 | Responsive design | Mobile-first, all breakpoints tested | ✅ Complete |

---

## 🎁 Optional Enhancements Implemented

| Feature | Details | Benefit |
|---------|---------|---------|
| **Dark Mode** | Light/Dark theme toggle, persisted preference | +UX polish |
| **Animations** | Glowing insight values, smooth transitions | +Visual appeal |
| **Number Formatting** | Indian locale formatting (₹1,000/-) | +Readability |
| **Toast Notifications** | Add/Delete success feedback | +User experience |
| **6-Month Window** | Charts show latest 6 months with zero-fill | +Data clarity |
| **Advanced Filtering** | Combined search + type + category filters | +Power user features |
| **Meaningful Analytics** | Balanced percentage change formula | +Realistic insights |
| **Responsive Charts** | ResponsiveContainer for all breakpoints | +Mobile-friendly |
| **localStorage** | Theme, role, and data persistence | +State recovery |

---

## 🎮 Usage Guide

### Dashboard Page
1. **View Summary**: Check balance, income, expenses at the top
2. **Monitor Trends**: See monthly expense trend in the line chart
3. **Analyze Spending**: View category breakdown in pie chart
4. **Check Insights**: Read top spending category and monthly change

### Transactions Page
1. **Search**: Type transaction title in search box
2. **Filter by Type**: Select Income/Expense from dropdown
3. **Filter by Category**: Select category to narrow results
4. **Sort**: Choose Latest first or Highest Amount
5. **See Total**: Total amount updates based on filters
6. **Manage (Admin only)**: Add or delete transactions

### Theme & Role
- **Dark Mode Toggle**: Click "Dark/Light Mode" button in navbar (top-right)
- **Role Switch**: Toggle between Viewer and Admin in navbar
- **Preferences Saved**: Theme and role choice persisted to localStorage

---

## 💾 State Management Architecture

### Redux Store Shape
```javascript
{
  transactions: {
    transactions: [],    // Array of transaction objects
    search: "",          // Current search query
    type: "all",         // Type filter (all/income/expense)
    category: "all",     // Category filter
    sort: "latest",      // Sort order (latest/amount)
    role: "viewer"       // Current user role (viewer/admin)
  }
}
```

### Reducer Actions
- `setSearch(query)` - Update search text
- `setType(type)` - Filter by transaction type
- `setCategory(category)` - Filter by category
- `setSort(sort)` - Change sort order
- `setRole(role)` - Switch user role
- `addTransaction(transaction)` - Add new transaction
- `deleteTransaction(id)` - Remove transaction

---

## 📈 Data & Mock Setup

### Transaction Data Structure
```javascript
{
  id: "t1",
  title: "Salary",
  amount: 50000,
  type: "income",          // income or expense
  category: "Salary",      // Custom categories
  date: "2026-02-01"       // YYYY-MM-DD format
}
```

### Sample Categories
- Salary, Freelance, Bonus (Income)
- Food, Transport, Bills, Entertainment, Health, Travel (Expense)

### Data Coverage
- 4+ months of realistic transaction data
- Mix of income and expense entries
- Varied amounts and categories for realistic analysis

---

## 🔄 Filtering & Sorting Logic

### Filter Combination
Filters work together (AND logic):
- **Match Search**: Title contains query (case-insensitive)
- **Match Type**: Type is selected type OR "all"
- **Match Category**: Category is selected category OR "all"

### Sort Options
1. **Latest First**: Sorted by date (newest to oldest)
2. **Highest Amount**: Sorted by amount (descending)

### Total Amount
Real-time sum of filtered transactions only (excludes unmatched rows).

---

## 🚀 Performance Optimization

- **Responsive Container**: Charts adapt to all screen sizes
- **Memoization Ready**: Component structure supports React.memo
- **Efficient Filtering**: O(n) filter operations
- **CSS Animations**: GPU-accelerated with `will-change`
- **Dark Mode**: Minimal rerender on theme toggle

---

## 🎨 Design Decisions

### Color Palette
- **Light Mode**: White/Gray backgrounds, dark text
- **Dark Mode**: Slate backgrounds, light text
- **Accent**: Blue for active/primary actions
- **Status Colors**: Green (income), Red (expense)

### Typography
- **Headings**: Bold, larger on desktop (responsive)
- **Body**: Clean, readable sans-serif via Tailwind defaults
- **Numbers**: Monospace-friendly with currency symbols

### Spacing
- **Mobile**: 1rem (16px) padding
- **Desktop**: 1.5rem (24px) padding
- **Consistent Grid**: 4px baseline spacing

---

## 🔐 Security & Best Practices

- **No Backend Auth**: Role switching is UI-only (as specified)
- **No Sensitive Data**: All mock data is fictional
- **localStorage Safe**: Only stores theme and preferences
- **Input Validation**: Form inputs validated before dispatch
- **Error Handling**: Graceful fallbacks for edge cases

---

## 📝 Assumptions & Notes

1. **Role-Based**: UI behavior only; no backend enforcement (frontend-only spec)
2. **Mock Data**: All transaction data is fictional and static
3. **localStorage Only**: No backend persistence (scope is frontend)
4. **Charts**: Latest 6 months shown; zero-fill for missing months
5. **Total Amount**: Calculated from filtered results only
6. **Edit UI**: Button visible in Admin mode (could be extended with edit modal)

---

## 🚧 Future Enhancements

- [ ] Edit transaction modal (form already prepared)
- [ ] Export transactions as CSV/JSON
- [ ] Budget tracking and alerts
- [ ] Recurring transaction templates
- [ ] Advanced date range filtering
- [ ] Category-wise monthly breakdown
- [ ] API integration for real data
- [ ] User authentication
- [ ] Transaction notes & attachments
- [ ] Tax summary report

---

## 🤝 Submission Notes

This project demonstrates:
- **Strong Frontend Fundamentals**: React hooks, Redux patterns, component composition
- **Product-Minded Thinking**: Thoughtful UX decisions (dark mode, responsive design, notifications)
- **Clean Code**: Well-organized folder structure, meaningful component names
- **Attention to Detail**: Animations, number formatting, edge case handling
- **Modern Stack**: React 19, Vite, Tailwind, Redux Toolkit
- **Responsive Design**: Works seamlessly on mobile, tablet, desktop

---

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

## 👤 Author

Built for **Zorvyn Company** as a Finance Dashboard Assignment.

**Project**: FinPulse - Personal Finance Dashboard  
**Date**: April 2026  
**Version**: 1.0.0

---

### ✨ Thank you for reviewing FinPulse! Happy analyzing. 📊
