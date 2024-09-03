import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/users';

import { useAppDispatch } from '../../store';
import { setUsers } from '../../store/usersReducer';

import { TableBlock, TableFilter, TableHead, TableList } from '../blocks/Table';
import { Loader, Title } from '../ui';

export const HomePage = () => {
    const dispatch = useAppDispatch();

    const { data: users, isLoading } = useQuery({
        queryFn: () => getUsers(),
        select: (date) => date.data,
        queryKey: ['users'],
    });

    useEffect(() => {
        users && dispatch(setUsers(users));
    }, [dispatch, users]);

    return (
        <section className='relative w-full'>
            <Title className='text-green mb-5 last:mb-0'>Users Table</Title>

            <TableFilter isLoading={isLoading} className='mb-5 last:mb-0' />

            <TableBlock>
                <TableHead />

                {isLoading && (
                    <div className='relative w-full h-80'>
                        <Loader />
                    </div>
                )}

                <TableList isLoading={isLoading} />
            </TableBlock>
        </section>
    );
};
