import { TableBlock } from './TableBlock';
import { TableHead } from './TableHead';
import { TableFilter } from './TableFilter';
import { TableList } from './TableList';

export const Table = () => {
    return (
        <section className='relative w-full'>
            <TableFilter className='mb-5 last:mb-0' />

            <TableBlock>
                <TableHead />
                <TableList />
            </TableBlock>
        </section>
    );
};
