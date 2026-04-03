import { createSlice } from "@reduxjs/toolkit";
import { transactions as initialData } from "../../data/transactions";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: initialData,
    search: "",
    type: "all",
    category: "all",
    sort: "latest",
    role: "viewer"
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    deleteTransaction: (state, action) => {
        state.transactions = state.transactions.filter((t) => t.id !== action.payload )
        console.log("After Updating", state.transactions)
    },
    addTransaction: (state, action) =>{
        state.transactions.push(action.payload)
        // console.log("Hello World")
    }
  }
});

export const { setSearch,
               setType,
               setCategory,
               setSort, 
               setRole,
               deleteTransaction,
               addTransaction
              } = transactionSlice.actions;

export default transactionSlice.reducer;