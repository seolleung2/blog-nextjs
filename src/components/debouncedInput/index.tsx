'use client';

import { useState, useEffect } from 'react';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
}

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounceTime = 300,
  ...props
}: Props) => {
  const [value, setValue] = useState(initialValue);

  // initialValue 가 변할 때마다 setValue 를 해준다.
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Debounce onChange - onKeyPress 때마다 트리거됨
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounceTime]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
