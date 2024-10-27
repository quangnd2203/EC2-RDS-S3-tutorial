import React from 'react';
import { Button, SxProps, Theme } from '@mui/material';

interface LoginButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

export default function LoginButton({ color = 'primary', onClick, disabled = false, children, sx }: LoginButtonProps) {
    return (
        <Button
            variant='outlined'
            color={color}
            onClick={onClick}
            disabled={disabled}
            fullWidth={true}
            sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 'normal', ...sx }}
        >
            {children}
        </Button>
    );
}
