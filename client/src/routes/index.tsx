import { Route, Routes, } from "react-router-dom";

// components
import { Expenses } from "../components/expenseTracker/Expenses";
import { ExpenseTrackerCreate } from "../components/expenseTracker/ExpenseTrackerCreate";
import { ExpenseTrackerHistory } from "../components/expenseTracker/ExpenseTrackerHistory";
import { NotFound } from "../pages/utils/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Expenses />} >
                <Route index element={<ExpenseTrackerCreate />} />
                <Route path="create" element={<ExpenseTrackerCreate />} />
                <Route path="history" element={<ExpenseTrackerHistory />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
