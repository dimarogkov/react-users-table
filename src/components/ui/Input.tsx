import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className='w-full h-10 px-4 rounded border border-gray bg-white outline-none transition-all duration-300 focus:border-black'
    />
));
