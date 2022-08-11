import { Container } from "@mui/system";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ExpenseTrackerBalance } from "./ExpenseTrackerBalance";

import { useState } from "react";

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Card, styled } from "@mui/material";

const OutletDiv = styled('div')({
    padding: "15px"
});

const CustomTabs = styled(Tabs)({
    "& .MuiTab-root.Mui-selected": {
        color: '#8a2b06'
    },

    "& .MuiTabs-indicator ": {
        backgroundColor: '#8a2b06'
    }
});


export const Expenses = () => {
    const url = useLocation();
    const [ value, setValue ] = useState(url.pathname);
    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='sm' sx={{ mt: "20px", mb: "20px" }}>
            <ExpenseTrackerBalance />

            <Card sx={{ width: '100%', mt: '20px' }}>
                <CustomTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                >
                    <Tab value="/" label="Create" component={Link} to='/' />
                    <Tab value="/history" label="History" component={Link} to='/history' />

                </CustomTabs>

                <OutletDiv>
                    <Outlet />
                </OutletDiv>
            </Card>
        </Container >
    );
};