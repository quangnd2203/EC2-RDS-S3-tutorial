import React from 'react';
import { Box } from '@mui/material';
import LoginButton from './components/LoginButton';

export default function LoginScreen() {
    return (
        <Box display='flex' alignItems='center' flexDirection='column' justifyContent='center' height='100vh' gap={2}>
            <LoginButton color='error'>Login Google</LoginButton>
            <LoginButton color='primary'>Login Facebook</LoginButton>
        </Box>
    );
}
