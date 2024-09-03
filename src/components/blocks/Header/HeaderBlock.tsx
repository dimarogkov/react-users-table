import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const HeaderBlock: React.FC<Props> = ({ children }) => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                {children}
            </div>
        </header>
    );
};
