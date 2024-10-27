import { Box, Typography } from '@mui/material';
import React from 'react';
import LoginButton from './components/LoginButton';
import { AppleIcon, FacebookIcon, GoogleIcon } from './components/LoginIcon';

export default function LoginScreen() {
    return (
        <Box
            display='flex'
            justifyContent='center' // Căn giữa theo chiều ngang
            alignItems='center' // Căn giữa theo chiều dọc
            height='100vh'
        >
            <Box
                flexDirection='column'
                gap={2}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
                    padding: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h4' align='center' fontWeight='bold'>
                    Kanban Board Project
                </Typography>
                <Typography align='center'>Please login to continue</Typography>
                <LoginButton sx={{ background: 'linear-gradient(0deg, #000000, #434343)', borderColor: 'black', gap: 1, color: 'white' }}>
                    <AppleIcon  /> Continue with Apple
                </LoginButton>
                <LoginButton sx={{ background: 'white', borderColor: '#D8D8D8', gap: 1, color: 'black' }}>
                    <GoogleIcon /> Continue with Google
                </LoginButton>
                <LoginButton sx={{ background: 'white', borderColor: '#D8D8D8', gap: 1, color: 'black' }}>
                    <FacebookIcon /> Continue with Facebook
                </LoginButton>
            </Box>
        </Box>
    );
}
