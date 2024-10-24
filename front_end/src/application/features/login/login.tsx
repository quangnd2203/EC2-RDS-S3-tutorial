import React from 'react';
import '@mui/material';
import { Box, Button } from '@mui/material';
import LoginButton from './components/login_button';

export default function LoginScreen() {
    return (
        <Box
            display='flex'
            alignItems='center'
            flexDirection='column'
            justifyContent='center'
            height='100vh'
            gap={2}
        >
            <LoginButton color='error'>Login Google</LoginButton>
            <LoginButton color='primary'>Login Facebook</LoginButton>
        </Box>
    )
};
