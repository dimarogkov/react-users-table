export interface IUserState {
    users: IUser[];
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
