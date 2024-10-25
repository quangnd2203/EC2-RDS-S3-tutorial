import React from 'react';
import { Box, TextField } from '@mui/material';

export default function BlogScreen() {
    return (
        <Box display='flex' alignItems='center' flexDirection='column' height='100vh' gap={2}>
            <h1>Create Blog</h1>
            <TextField
                label='Blog name'
                variant='outlined'
                sx={{
                    width: 500,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'gray' // Màu border khi không focus
                        },
                        '&:hover fieldset': {
                            borderColor: 'blue' // Màu border khi hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'blue' // Màu border khi focus
                        }
                    }
                }}
            />
        </Box>
        // <div>
        //     <h1>Blog Screen</h1>
        //     <Input placeholder="Search" />
        // </div>
    );
}
