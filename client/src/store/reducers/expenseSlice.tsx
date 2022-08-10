import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface Amount {
    text: string,
    type?:string,
    amount: number;
}

export interface ExpenseState {
    currentBalance: number;
    history: Amount[];
}

const initialState: ExpenseState = {
    currentBalance: 0,
    history: []
};


export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addAmount: (state: ExpenseState, action: PayloadAction<Amount>) => {
            if(action.payload.amount >0) {
                action.payload.type = 'income';
            } else {
                action.payload.type = 'expense';
            }
            
            state.currentBalance += +action.payload.amount;

            state.history.push(action.payload);
        }
    }
});

export const { addAmount } = expenseSlice.actions;


export default expenseSlice.reducer;