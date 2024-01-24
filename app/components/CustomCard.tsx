"use client"

import React from 'react';
import Card from '@mui/material/Card'


interface CardProps {
  // Define your card props here
}

const CustomCard: React.FC<CardProps> = ({ /* Destructure props */ }) => {
  return (
    <Card>
      {/* Your card content */}
    </Card>
  );
};

export default CustomCard;
