import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from "./transaction/transactionSlice"

export const store = configureStore({
  reducer: {
    transactions: transactionReducer
  },
});
