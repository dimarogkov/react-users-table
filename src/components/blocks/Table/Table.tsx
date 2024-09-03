import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../../services/users';

import { TableBlock } from './TableBlock';
import { TableHead } from './TableHead';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';
import { Loader } from '../../ui';

export const Table = () => {
    const { data: users, isLoading } = useQuery({
        queryFn: () => getUsers(),
        select: (date) => date.data,
        queryKey: ['users'],
    });

    return (
        <section className='relative w-full'>
            <TableFilter isLoading={isLoading} className='mb-5 last:mb-0' />

            <TableBlock>
                <TableHead />

                {isLoading && (
                    <div className='relative w-full h-80'>
                        <Loader />
                    </div>
                )}

                {users && <TableList users={users} />}
            </TableBlock>
        </section>
    );
};
