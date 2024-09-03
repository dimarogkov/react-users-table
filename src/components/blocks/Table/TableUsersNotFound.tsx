import { useAppDispatch } from '../../../store';
import { resetValues } from '../../../store/usersReducer';
import { Btn, Subtitle } from '../../ui';
import { RefreshCw } from 'lucide-react';

export const TableUsersNotFound = () => {
    const dispatch = useAppDispatch();

    return (
        <div className='flex items-center justify-center text-center w-full h-80'>
            <div>
                <Subtitle className='mb-5 last:mb-0'>Users is not exist. Please try again.</Subtitle>

                <Btn className='m-auto' onClick={() => dispatch(resetValues())}>
                    <span>Try Again</span>
                    <RefreshCw className='w-5 h-5 text-white' />
                </Btn>
            </div>
        </div>
    );
};
