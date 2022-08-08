import { Route, Routes, } from "react-router-dom";
import { DashBoards } from "../components/dashboards/DashBoards";
import { ExpenseTrackerList, ExpenseTrackerCreate, ExpenseTrackerUpdate, ExpenseTrackerDetail } from "../components/expenseTracker";
import { NotFound } from "../pages/utils/NotFound";

export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<DashBoards /> } />
            <Route path='expenses' element={<ExpenseTrackerList />} />
            <Route path='expense/create' element={<ExpenseTrackerCreate />} />
            <Route path='expense/update/:id' element={<ExpenseTrackerUpdate />} />
            <Route path='expense/detail/:id' element={<ExpenseTrackerDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
