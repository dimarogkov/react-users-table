import { ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    children: ReactNode;
    className?: string;
}

export const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, children, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            to={href}
            {...props}
            className={`flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded text-white bg-green transition-opacity duration-300 hover:opacity-80 ${className}`}
        >
            {children}
        </Link>
    )
);
