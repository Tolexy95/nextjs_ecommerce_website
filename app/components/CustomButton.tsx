import React from 'react';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends MuiButtonProps {
 
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', ...rest }) => {
  return (
    <Button variant={variant} color="primary" {...rest}>
      {rest.children}
    </Button>
  );
};

export default CustomButton;
