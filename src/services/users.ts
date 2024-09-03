import axios from 'axios';
import { API_URL } from '../variables';
import { IUser } from '../types/User';

export const getUsers = () => {
    return axios.get<IUser[]>(`${API_URL}/users`);
};
