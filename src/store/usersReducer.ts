import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../types/User';

const initialState: IUserState = {
    users: [],
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<any[]>) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
