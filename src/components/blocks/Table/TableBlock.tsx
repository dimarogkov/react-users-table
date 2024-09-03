import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    className?: string;
};

export const TableBlock: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <div className={`w-full overflow-auto ${className}`}>
            <div className='w-full min-w-[1200px] border border-gray'>{children}</div>
        </div>
    );
};
