import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface amount {
    text: string,
    amount: number;
}

export interface ExpenseState {
    currentBalance: number;
    history: amount[];
}

const initialState: ExpenseState = {
    currentBalance: 0,
    history: []
};


export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addAmount: (state: ExpenseState, action: PayloadAction<amount>) => {
            state.history.push(action.payload);
        }
    }
});

export const { addAmount } = expenseSlice.actions;


export default expenseSlice.reducer;