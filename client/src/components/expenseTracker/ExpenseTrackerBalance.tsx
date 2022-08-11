import { styled, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/hooks/store";
import { Amount } from "../../store/reducers/expenseSlice";

const Expense = styled('div')({
    display: "flex",
    alignItems: 'center',
    transition: "all .4s",
    width: '100%',
    border: '1px solid #eee',
    height: '100px',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.1)',

    'div': {
        flex: '1',
        textAlign: 'center',
        justifyContent: 'center',

        'h4': {
            marginBottom: '0',
        },

        'p': {
            fontSize: '20px',
            letterSpacing: '1px',
            margin: '5px 0',

            '&.plus': {
                color: '#2ecc71',

            },

            '&.minus': {
                color: '#c0392b',
                borderRight: '1px solid #black'
            },
        },

        '&.income': {
            borderRight: '1px solid #eee',
        }
    }
});


const updateTracker = (type: string, data: Amount[]) => {
    return Math.abs(data.filter((item: Amount) => item.type === type)
        .reduce((total, record) => total += +record.amount, 0));
};

export const ExpenseTrackerBalance = () => {
    const store = useAppSelector((state: RootState) => state.expense);
    const currentBalance = store.currentBalance;
    const currentIncome = updateTracker('income', store.history);
    const currentExpense = updateTracker('expense', store.history);

    return (
        <>
            <Typography variant="h4" fontStyle="Lato"> YOUR BALANCE</Typography>

            <Typography variant="h3" fontStyle="Lato" sx={{ mb: "20px", fontWeight: 400 }}>${currentBalance.toFixed(2)}  </Typography>

            <Expense>
                <div className="income">
                    <h4>INCOME</h4>
                    <p className="plus">${currentIncome.toFixed(2)}</p>
                </div>
                <div className="expense">
                    <h4>EXPENSE</h4>
                    <p className="minus">${currentExpense.toFixed(2)}</p>
                </div>
            </Expense>
        </>
    );
};