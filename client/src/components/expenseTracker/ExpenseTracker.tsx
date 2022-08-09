import { Button, Container, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../../store/hooks/hooks";
import Box from '@mui/material/Box';
import { RootState } from "../../store/hooks/store";

const defaultValues = {
    text: "",
    amount: 0
};

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

    const balance = useAppSelector((state: RootState) => state.expense.currentBalance);
    const { control } = useForm({ defaultValues });

    const [ currentBalance ] = useState<number>(balance);

    return (

        <Container maxWidth='sm' sx={{ mt: "20px", mb: "20px" }}>

            <Typography variant="h4" fontStyle="Lato"> YOUR BALANCE</Typography>

            <Typography variant="h3" fontStyle="Lato" sx={{ mb: "20px", fontWeight: 400 }}>${currentBalance.toFixed(2)}  </Typography>

            <Expense>
                <div className="income">
                    <h4>INCOME</h4>
                    <p className="plus">$110.1</p>
                </div>
                <div className="expense">
                    <h4>EXPENSE</h4>
                    <p className="minus">$10</p>
                </div>
            </Expense>

            <Box sx={{ width: "100%", height: 300, mt: '20px' }}>
                <Controller name="text" render={({ field }) => <TextField {...field} label="Text" sx={textFieldSx} fullWidth />} control={control} />

                <Controller name="amount" render={({ field }) => <TextField {...field} label="Amount (negative - expense, positive - income)" type="number" sx={textFieldSx} fullWidth />} control={control} />

                <Button variant="contained" color="primary" size="large" sx={{ float: "right" }}>SUBMIT</Button>
            </Box>

        </Container>
    );
};