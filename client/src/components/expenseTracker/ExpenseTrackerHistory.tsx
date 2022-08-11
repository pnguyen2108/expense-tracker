import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/hooks/store";

const CustomSelect = styled(Select)({
    '&.MuiInputBase-root:hover:before': {
        borderBottom: '2px solid #8a2b06'
    },

    '&.Mui-focused:after': {
        borderBottom: '2px solid #8a2b06'
    }
});

const ExpenseItem = styled(Typography)({
    backgroundColor: '#fff',
    padding: '8px',
    fontSize: '20px',
    margin: '10px 0',
    borderRadius: '5px',
    boxShadow: '0 1rem 2rem rgba(0,0,0,.2)',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    translation: 'all 0.5s',

    '&:hover': {
        transform: 'translateY(5px) scale(1.02)',
        boxShadow: '0 1rem 2rem rgba(0,0,0,.4)',
    },

    '&.income': {
        borderRight: '4px solid #2ecc71'
    },

    '&.expense': {
        borderRight: '4px solid #c0392b'
    },
});

export const ExpenseTrackerHistory = () => {
    const history = useAppSelector((state: RootState) => state.expense.history);
    const [ type, setType ] = useState('all');
    const results = history.filter(item => {
        if (type === 'all') {
            return item;
        } else if (type === item.type) {
            return item;
        }
    });

    const handleChange = (event: any) => {
        setType(event.target.value);
    };
    return (
        <Box sx={{ m: "10px 0" }}>
            <Box >
                <FormControl variant="standard" sx={{ width: '100px' }} >
                    <CustomSelect
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={type}
                        label="Type"
                        autoWidth
                        onChange={handleChange}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={'income'}>Income</MenuItem>
                        <MenuItem value={'expense'}>Expense</MenuItem>
                    </CustomSelect>
                </FormControl>
            </Box>



            <Box sx={{ display: 'block', mt: '20px', }}>
                {results.reverse().map((item) =>
                    <ExpenseItem className={item.type === 'income' ? 'income' : 'expense'}>
                        {item.text}
                        <span>
                            {item.type === 'expense' && "-"}
                            $
                            {Math.abs(item.amount).toFixed(2)}
                        </span>
                    </ExpenseItem>
                )}
            </Box>
        </Box>

    );
};