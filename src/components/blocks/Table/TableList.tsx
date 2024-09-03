import { IUser } from '../../../types/User';
import { Text } from '../../ui';

type Props = {
    users: IUser[];
};

export const TableList: React.FC<Props> = ({ users }) => {
    return (
        <div className='w-full'>
            {users.map(({ id, name, username, email, phone }) => (
                <div className='grid grid-cols-4 w-full border-t border-gray' key={id}>
                    <Text className='p-3 border-r border-gray'>{name}</Text>
                    <Text className='p-3 border-r border-gray'>{username}</Text>
                    <Text className='p-3 border-r border-gray'>{email}</Text>
                    <Text className='p-3'>{phone}</Text>
                </div>
            ))}
        </div>
    );
};
