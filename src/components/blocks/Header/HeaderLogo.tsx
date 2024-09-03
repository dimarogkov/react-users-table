import { PROJECT_NAME } from '../../../variables';
import { Subtitle } from '../../ui';
import { Code } from 'lucide-react';

export const HeaderLogo = () => {
    return (
        <Subtitle className='flex items-center gap-3 sm:gap-4'>
            <span className='flex items-center justify-center w-10 h-10 rounded-full bg-green'>
                <Code className='w-5 h-5 text-white' />
            </span>

            <span className='hidden sm:block'>{PROJECT_NAME}</span>
        </Subtitle>
    );
};
