import { Grid, Paper } from '@mui/material';
import React from 'react';

function BlogItem({ title, description }: { title: string; description: string }) {
    return (
        <Paper>
            <h3>{title}</h3>
            <p>{description}</p>
        </Paper>
    );
}

export default function ListBlog() {
    return (
        <Grid container spacing={2} padding='20px'>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
            <Grid item xs={3}>
                <BlogItem title='Toi co nguoi yeu' description='Toi co nguoi yeu xinh dep ten la le thi kim tram' />
            </Grid>
        </Grid>
    );
}
