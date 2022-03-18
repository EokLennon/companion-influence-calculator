import classNames from 'classnames';
import React from 'react';

type Props = Omit<React.HTMLProps<HTMLInputElement>, 'autocomplete'|'type'|'onChange'> & {
  type?: 'text'|'number'|'letters'|'alphanumeric'
  onChange?: (value: any) => void
};

const TextInput = ({className, type, ...props}: Props) => {

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
    props.onChange && props.onChange(value);
  }

  const classes = classNames(
    'bg-gray-900',
    'border-b-2',
    'border-cyan-base',
    'focus:border-cyan-300',
    'focus:outline-none'
  );

  return (
    <input
      {...props}
      autoComplete='off'
      className={`component-input ${classes} ${className}`}
      onKeyPress={filterKeys}
      onChange={handleChange}
    />
  )
}

export default TextInput;