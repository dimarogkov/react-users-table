import { Text } from '../../ui';

export const TableHead = () => {
    return (
        <div className='grid grid-cols-4 w-full bg-gray/50'>
            <Text className='p-2 border-r border-gray text-green'>Name</Text>
            <Text className='p-2 border-r border-gray text-green'>Username</Text>
            <Text className='p-2 border-r border-gray text-green'>Email</Text>
            <Text className='p-2 text-green'>Phone</Text>
        </div>
    );
};
