import { Button, styled, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks/hooks";
import Box from '@mui/material/Box';
import { addAmount, Amount } from "../../store/reducers/expenseSlice";

type FormType = {
    text: string,
    amount: number;
};

const defaultValues = {
    text: "",
    amount: 0
};

const CustomTextField = styled(TextField)({
    margin: '15px 0',

    '& label.Mui-focused': {
        color: '#8a2b06',
    },

    '& .MuiInput-underline:after': {
        borderBottomColor: '#8a2b06',
    },

    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#8a2b06',
        },

        '&.Mui-focused label': {
            borderColor: '#8a2b06',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #8a2b06',
        },
    },
});

const CustomButton = styled(Button)({
    '&.MuiButton-root': {
        backgroundColor: '#8a2b06',
        opacity: '.8',
        transition: 'all .5s'
    },

    '&.MuiButton-root:hover': {
        backgroundColor: '#8a2b06',
        opacity: '1',
        boxShadow: '0 1rem 2rem rgba(0,0,0,.3)',
        transform: 'scale(1.1)'
    }
});

const Invalid = styled('p')({
    color: 'red',
    fontSize: '16px',
    margin: "5px 0"
});

export const ExpenseTrackerCreate = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormType>({ defaultValues });

    const onSubmit: SubmitHandler<FormType> = (data: Amount) => {
        dispatch(addAmount(data));

        reset();
    };

    return (
        <Box sx={{ width: "100%", height: 240, mt: '20px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <>
                    <Controller name="text" rules={{ required: "required", minLength: { value: 5, message: "min 5" } }} render={({ field }) =>
                        <CustomTextField error={errors.text ? true : false}  {...field} inputProps={{ maxLength: 100 }} autoFocus label="Text" fullWidth />} control={control} />
                    <Invalid> {errors.text?.message}</Invalid>

                    <Controller rules={{ validate: { validAmount: (amount: number) => +amount !== 0 || "invalid input" } }} name="amount" render={({ field }) =>
                        <CustomTextField error={errors.amount ? true : false}  {...field} label="Amount (negative - expense, positive - income)" type="number" fullWidth />} control={control} />

                    <Invalid> {errors.amount?.message}</Invalid>

                    <CustomButton variant="contained" type="submit" color="primary" size="large" sx={{ float: "right" }}>SUBMIT</CustomButton>
                </>
            </form>
        </Box>
    );
};