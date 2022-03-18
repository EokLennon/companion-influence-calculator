import React from 'react';

interface Action {
    icon: React.ReactNode
    callback: () => void
}

export interface CardHeaderProps {
    text: string
    actions?: Action[]
    className?: string

}

const CardHeader = ({ text, className = '', ...props }: CardHeaderProps): JSX.Element => {
    const classes = `flex flex-row items-center px-3 bg-cyan-400`;
    // justify-${justify} items-${items}
    return (
        <div className={`${classes} component-cardheader ${className}`}>
            <h3 className='text-gray-900 text-center uppercase font-black text-xl container-title flex-grow'>{text}</h3>
            {/* <div className=''>
                <span>Icono</span>
            </div> */}
        </div>
    )
}

export default CardHeader;