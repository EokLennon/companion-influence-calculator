import React, { useState } from 'react';
import classNames from 'classnames';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'autocomplete'|'type'|'onBlur'> & {
  type?: 'text'|'number'|'letters'|'alphanumeric'
  onValue?: (value: any) => void
};

const TextInput = ({ value, onValue, className, type, ...props }: Props) => {
  const [current, setCurrent] = useState(value === undefined ? '' : value);

  const filterKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const numbers = /[0-9]/;
    const letters = /[A-Z a-z]/;
    if (type === "number" && !numbers.test(e.key)) {
      e.preventDefault();
    } else if (type === "letters" && !letters.test(e.key)) {
      e.preventDefault();
    } else if (type === "alphanumeric" && !letters.test(e.key) && !numbers.test(e.key)) {
      e.preventDefault();
    } else {
      props.onKeyPress && props.onKeyPress(e);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrent(value);
  }

  const reportValue = () => {
    let value = current;
    if (type === 'number' && props.max !== undefined && value > props.max) value = `${props.max}`;
    if (type === 'number' && props.min !== undefined && value < props.min) value = `${props.min}`;
    setCurrent(value);
    onValue && onValue(value);
  }

  const classes = classNames(
    'bg-gray-900',
    'border-b-2',
    'border-gray-700',
    'appearance-none',
    'focus:border-cyan-base',
    'focus:outline-none'
  );

  return (
    <input
      {...props}
      type={type}
      autoComplete='off'
      className={`component-input ${classes} ${className}`}
      value={current}
      onKeyPress={filterKeys}
      onChange={handleChange}
      onBlur={reportValue}
    />
  )
}

export default TextInput;