import React from 'react';
import classNames from 'classnames';

import { Colors } from 'interfaces/general'

export interface ChipProps {
    label: string
    color: Colors
    variant: 'contained'|'outlined'
}

const Chip = ({ label, variant = 'outlined', color = 'gray' }: ChipProps) => {
    const classes = classNames(
        'cursor-pointer',
        'text-center',
        'rounded-full',
        'w-24',
        'font-medium',
        'border-2',

        { 'border-gray-base': color === 'gray' },
        { 'border-cyan-base': color === 'primary' },
        { 'border-yellow-base': color === 'secondary' },
        { 'border-green-base': color === 'like' },
        { 'border-blue-base': color === 'favorite' },
        { 'border-pink-base': color === 'love' },

        { 'text-gray-base': color === 'gray' && variant === 'outlined' },
        { 'text-cyan-base': color === 'primary' && variant === 'outlined' },
        { 'text-yellow-base': color === 'secondary' && variant === 'outlined' },
        { 'text-green-base': color === 'like' && variant === 'outlined' },
        { 'text-blue-base': color === 'favorite' && variant === 'outlined' },
        { 'text-pink-base': color === 'love' && variant === 'outlined' },

        { 'bg-gray-base': color === 'gray' && variant === 'contained' },
        { 'bg-cyan-base': color === 'primary' && variant === 'contained' },
        { 'bg-yellow-base': color === 'secondary' && variant === 'contained' },
        { 'bg-green-base': color === 'like' && variant === 'contained' },
        { 'bg-blue-base': color === 'favorite' && variant === 'contained' },
        { 'bg-pink-base': color === 'love' && variant === 'contained' },

        { 'text-white': variant === 'contained' },
    );  

    return (
        <div className={classes}>
            {label}
        </div>
    )
}

export default Chip;