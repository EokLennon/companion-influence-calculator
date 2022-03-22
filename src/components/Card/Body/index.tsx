import classNames from 'classnames';
import React from 'react';

export interface CardBodyProps {
    className?: string
    flex?: boolean
    direction?: 'row'|'column'
    justify?: 'start'|'end'|'center'|'between'|'around'|'evenly'
    items?: 'start'|'end'|'center'|'baseline'|'stretch'
    wrap?: true|'nowrap'|'reverse'
    reverse?: boolean
}

const CardBody: React.FC<CardBodyProps> = ({ 
    flex = false,
    className = '', 
    direction = 'row', 
    justify = 'start', 
    items = 'baseline', 
    wrap = true, 
    reverse,
    ...props 
}) => {
    const classes = classNames(
        { 'flex': flex },
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
        { 'flex-wrap': wrap === true },
        { 'flex-nowrap': wrap === 'nowrap' },
        { 'flex-wrap-reverse': wrap === 'reverse' },
        'p-3'
    );
    return (
        <div className={`${classes} component-cardbody ${className}`}>
            {props.children}
        </div>
    )
}

export default CardBody;