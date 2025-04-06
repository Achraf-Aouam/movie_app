import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <MuiButton variant="contained" onClick={onClick} disabled={disabled}>
            {label}
        </MuiButton>
    );
};

export default Button;