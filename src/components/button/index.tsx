import React from 'react';
import cn from 'classnames';

type Props = {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  handleClick?: () => void;
};

export default function Button({
  text,
  className,
  type = 'submit',
  disabled = false,
  handleClick,
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        'rounded-lg bg-primary px-6 py-2.5 text-sm text-white hover:bg-indigo-700',
        disabled &&
          'cursor-not-allowed border-none bg-slate-200 text-slate-500',
        className as string
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
