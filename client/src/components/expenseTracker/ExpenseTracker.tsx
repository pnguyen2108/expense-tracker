import { Button, Container, styled, TextField, Typography } from "@mui/material";
// import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import Box from '@mui/material/Box';
import { RootState } from "../../store/hooks/store";
import { addAmount, Amount } from "../../store/reducers/expenseSlice";
import { useEffect } from "react";

type FormType = {
    text: string,
    amount: number;
};

const defaultValues = {
    text: "",
    amount: 0
};

const Invalid = styled('p')({
    color: 'red',
    fontSize: '16px',
    margin: "5px 0"
});

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

export const ExpenseTracker = () => {
    const textFieldSx = {
        m: "15px 0"
    };

    const dispatch = useAppDispatch();
    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormType>({ defaultValues });
    const store = useAppSelector((state: RootState) => state.expense);

    const updateTracker = (type: string) => {
        return Math.abs(store.history.filter((item: Amount) => item.type === type)
            .reduce((total, record) => total += +record.amount, 0));
    };

    const currentBalance = store.currentBalance;
    const currentIncome = updateTracker('income');
    const currentExpense = updateTracker('expense');


    const onSubmit: SubmitHandler<FormType> = (data) => {
        dispatch(addAmount(data));

        reset();
    };

    useEffect(() => {
        console.log("Hola Amigo");
    }, []);

    return (

        <Container maxWidth='sm' sx={{ mt: "20px", mb: "20px" }}>

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

            <Box sx={{ width: "100%", height: 300, mt: '20px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <>
                        <Controller name="text" rules={{ required: "required", minLength: { value: 5, message: "min 5" } }} render={({ field }) =>
                            <TextField error={errors.text ? true : false}  {...field} inputProps={{ maxLength: 100 }} autoFocus label="Text" sx={{}} fullWidth />} control={control} />
                        <Invalid> {errors.text?.message}</Invalid>

                        <Controller rules={{ validate: { validAmount: (amount: number) => +amount !== 0 || "invalid input" } }} name="amount" render={({ field }) =>
                            <TextField error={errors.amount ? true : false}  {...field} label="Amount (negative - expense, positive - income)" type="number" sx={textFieldSx} fullWidth />} control={control} />

                        <Invalid> {errors.amount?.message}</Invalid>
                        <Button variant="contained" type="submit" color="primary" size="large" sx={{ float: "right" }}>SUBMIT</Button>

                    </>
                </form>
            </Box>

        </Container>
    );
};