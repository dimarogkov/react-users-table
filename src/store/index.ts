import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import usersReducer from './usersReducer';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = createDispatchHook<RootState>();
export const useAppSelector: TypedUseSelectorHook<RootState> = createSelectorHook();
