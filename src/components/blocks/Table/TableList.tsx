import { useMemo } from 'react';
import { useAppSelector } from '../../../store';
import { TableUsersNotFound } from './TableUsersNotFound';
import { Text } from '../../ui';

type Props = {
    isLoading: boolean;
};

export const TableList: React.FC<Props> = ({ isLoading }) => {
    const { nameValue, usernameValue, emailValue, phoneValue, users } = useAppSelector((state) => state.users);

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {
            const matchesName = nameValue ? user.name.toLowerCase().includes(nameValue.toLowerCase()) : true;

            const matchesUsername = usernameValue
                ? user.username.toLowerCase().includes(usernameValue.toLowerCase())
                : true;

            const matchesEmail = emailValue ? user.email.toLowerCase().includes(emailValue.toLowerCase()) : true;

            const matchesPhone = phoneValue ? user.phone.toLowerCase().includes(phoneValue.toLowerCase()) : true;

            return matchesName && matchesUsername && matchesEmail && matchesPhone;
        });
    }, [emailValue, nameValue, phoneValue, usernameValue, users]);

    return (
        <div className='w-full'>
            {!filteredUsers.length && !isLoading && <TableUsersNotFound />}

            {filteredUsers.map(({ id, name, username, email, phone }) => (
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
