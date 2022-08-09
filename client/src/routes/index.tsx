import { Route, Routes, } from "react-router-dom";
import { DashBoards } from "../components/dashboards/DashBoards";
import { ExpenseTracker } from "../components/expenseTracker/ExpenseTracker";
import { NotFound } from "../pages/utils/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<DashBoards />} />
            <Route path='expenses' element={<ExpenseTracker />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
