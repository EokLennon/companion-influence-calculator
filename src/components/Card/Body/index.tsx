import classNames from 'classnames';
import React from 'react';

export interface CardBodyProps {
    className?: string
    direction?: 'row'|'column'
    justify?: 'start'|'end'|'center'|'between'|'around'|'evenly'
    items?: 'start'|'end'|'center'|'baseline'|'stretch'
}

const CardBody: React.FC<CardBodyProps> = ({ className = '', direction = 'row', justify = 'start', items = 'baseline', ...props }) => {
    const classes = classNames(
        'flex',
        { 'flex-row': direction === 'row' },
        { 'flex-col': direction === 'column' },
        { 'justify-start': justify === 'start' },
        { 'justify-end': justify === 'end' },
        { 'justify-center': justify === 'center' },
        { 'justify-between': justify === 'between' },
        { 'justify-around': justify === 'around' },
        { 'justify-evenly': justify === 'evenly' },
        { 'items-start': items === 'start' },
        { 'items-end': items === 'end' },
        { 'items-center': items === 'center' },
        { 'items-baseline': items === 'baseline' },
        { 'items-stretch': items === 'stretch' },
        'p-3'
    );
    return (
        <div className={`${classes} component-cardbody ${className}`}>
            {props.children}
        </div>
    )
}

export default CardBody;