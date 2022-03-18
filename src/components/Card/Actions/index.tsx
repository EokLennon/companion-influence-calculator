import React from 'react';

export interface CardContentProps {
    className?: string
}

const CardBody: React.FC<CardContentProps> = (props) => (
    <div className={`flex flex-row justify-end items-center component-cardheader ${props.className || ''}`}>
        {props.children}
    </div>
)

export default CardBody;