import React from 'react';

import Header from './Header';
import Body from './Body';
import Actions from './Actions';
import classNames from 'classnames';

export interface CardProps {
  
}

type CardComponent = React.FC<CardProps> & { 
  Header: typeof Header
  Body: typeof Body 
  Actions: typeof Actions
};

const Card: CardComponent = (props) => {
  const classes = classNames(
    'box-border',
    'h-fit',
    'border-4',
    'rounded-lg',
    'bg-gray-900',
    'border-cyan-400',
    'component-card'
  );

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

Card.Header = Header;
Card.Body = Body;
Card.Actions = Actions;

export default Card;