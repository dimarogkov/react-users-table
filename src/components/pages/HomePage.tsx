import { Table } from '../blocks/Table';
import { Text, Title } from '../ui';

export const HomePage = () => {
    return (
        <>
            <section className='relative w-full mb-10 last:mb-0'>
                <Title className='text-green mb-4 last:mb-0'>Users Table</Title>

                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur corrupti voluptatum itaque
                    similique, quisquam ex aperiam rem ab laborum veritatis vitae eos maxime autem culpa beatae deleniti
                    necessitatibus reprehenderit praesentium!
                </Text>
            </section>

            <Table />
        </>
    );
};
