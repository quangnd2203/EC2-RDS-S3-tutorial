import React from 'react';
import { Button } from '@mui/material';

interface LoginButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export default function LoginButton({
    color = 'primary',
    onClick,
    disabled = false,
    children,
}: LoginButtonProps) {
    return (
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            disabled={disabled}
            sx={{ width: 200 }}
        >
            {children}
        </Button>
    );
}