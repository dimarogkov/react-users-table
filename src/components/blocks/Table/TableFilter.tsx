import { useAppDispatch, useAppSelector } from '../../../store';
import { setSearchValue } from '../../../store/usersReducer';
import { EnumSearchValue } from '../../../types/enums';
import { Input, Label } from '../../ui';

type Props = {
    isLoading: boolean;
    className?: string;
};

export const TableFilter: React.FC<Props> = ({ isLoading, className = '' }) => {
    const { nameValue, usernameValue, emailValue, phoneValue } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    const validateAmount = (event: React.KeyboardEvent<HTMLInputElement>) => {
        !/[0-9]/.test(event.key) && event.preventDefault();
    };

    return (
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full ${className}`}>
            <Label className='w-full'>
                <Input
                    name='name'
                    placeholder='Search by Name'
                    disabled={isLoading}
                    value={nameValue}
                    onChange={({ target }) => {
                        dispatch(setSearchValue({ type: EnumSearchValue.name, value: target.value }));
                    }}
                />
            </Label>

            <Label className='w-full'>
                <Input
                    name='username'
                    placeholder='Search by Username'
                    disabled={isLoading}
                    value={usernameValue}
                    onChange={({ target }) => {
                        dispatch(setSearchValue({ type: EnumSearchValue.username, value: target.value }));
                    }}
                />
            </Label>

            <Label className='w-full'>
                <Input
                    name='email'
                    placeholder='Search by Email'
                    disabled={isLoading}
                    value={emailValue}
                    onChange={({ target }) => {
                        dispatch(setSearchValue({ type: EnumSearchValue.email, value: target.value }));
                    }}
                />
            </Label>

            <Label className='w-full'>
                <Input
                    name='phone'
                    placeholder='Search by Phone'
                    disabled={isLoading}
                    value={phoneValue}
                    onKeyPress={validateAmount}
                    onChange={({ target }) => {
                        dispatch(setSearchValue({ type: EnumSearchValue.phone, value: target.value }));
                    }}
                />
            </Label>
        </div>
    );
};
