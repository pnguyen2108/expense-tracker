import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
