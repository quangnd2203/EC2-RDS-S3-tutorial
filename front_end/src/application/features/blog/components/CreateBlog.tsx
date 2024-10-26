import { Box, TextField } from '@mui/material';
import LoginButton from 'application/features/login/components/LoginButton';
import React from 'react';

export default function CreateBlog() {
    return (
        <Box display='flex' alignItems='center' flexDirection='column' gap={2}>
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
            <TextField
                label='Desscription'
                variant='outlined'
                multiline={true}
                minRows={4}
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
            <LoginButton>Save</LoginButton>
        </Box>
    );
}
