import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EnumSearchValue } from '../types/enums';
import { IUser, IUserState } from '../types/interfaces/User';
import { ISearchData } from '../types/interfaces/SearchData';

const initialState: IUserState = {
    users: [],
    nameValue: '',
    usernameValue: '',
    emailValue: '',
    phoneValue: '',
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<ISearchData>) => {
            const { type, value } = action.payload;

            state.nameValue = '';
            state.usernameValue = '';
            state.emailValue = '';
            state.phoneValue = '';

            switch (type) {
                case EnumSearchValue.username:
                    state.usernameValue = value;
                    break;
                case EnumSearchValue.email:
                    state.emailValue = value;
                    break;
                case EnumSearchValue.phone:
                    state.phoneValue = value;
                    break;
                default:
                    state.nameValue = value;
            }
        },
        resetValues: (state) => {
            state.nameValue = '';
            state.usernameValue = '';
            state.emailValue = '';
            state.phoneValue = '';
        },
    },
});

export const { setUsers, setSearchValue, resetValues } = usersSlice.actions;
export default usersSlice.reducer;
