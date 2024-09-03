import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className={cn(
            'w-full h-10 px-4 rounded border border-gray outline-none transition-all duration-300 focus:border-black',
            {
                'bg-white': !props.disabled,
                'bg-gray': props.disabled,
            }
        )}
    />
));
