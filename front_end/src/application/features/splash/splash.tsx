import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppRouters from '../../routers/appRouters';

export default function SplashScreen() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate(AppRouters.LOGIN   );
    }, 3000);
    return (
        <Box display='flex' alignItems='center' justifyContent='center' height='100vh'>
            <Typography variant='h1'>Splash Screen</Typography>
        </Box>
    );
}
