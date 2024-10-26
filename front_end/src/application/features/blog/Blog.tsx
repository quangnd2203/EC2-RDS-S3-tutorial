import React from 'react';
import { Box, Divider } from '@mui/material';
import { CreateBlog } from './components';
import ListBlog from './components/ListBlog';

export default function BlogScreen() {
    return (
        <Box display='flex' alignItems='center' flexDirection='column' height='100vh' gap={2}>
            <CreateBlog />
            <Divider orientation='horizontal' flexItem />
            <ListBlog></ListBlog>
        </Box>
    );
}
