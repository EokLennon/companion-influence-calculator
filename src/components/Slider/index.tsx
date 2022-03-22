import React from 'react';
import classNames from 'classnames';

import * as SliderP from '@radix-ui/react-slider';

// type SliderProps = Omit<SliderP.SliderProps, 'onValueChange'> & {
//   onValueChange?: (value: any) => void
// }

const Slider = ({ className, ...props }: SliderP.SliderProps) => {

  const handleChange = (value: number[]) => {
    props.onValueChange && props.onValueChange(value);
  }

  const rootClasses = classNames(
    className,
    'relative',
    'flex',
    'items-center',
    'w-full',
    'h-6',
    'select-none'
  );

  return (
    <SliderP.Root className={rootClasses} onValueChange={handleChange} {...props}>
      <SliderP.Track className="relative flex-grow h-1 bg-gray-700 rounded-full outline-none">
        <SliderP.Range className="absolute h-full bg-gray-500 rounded-full outline-none" />
      </SliderP.Track>
      <SliderP.Thumb className="z-50 block w-4 h-4 font-bold bg-cyan-base rounded-full shadow-xl outline-none ring-cyan-base focus:ring-2" />
    </SliderP.Root>

  );
};

export default Slider;