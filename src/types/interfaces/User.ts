export interface IUserState {
    users: IUser[];
    nameValue: string;
    usernameValue: string;
    emailValue: string;
    phoneValue: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
