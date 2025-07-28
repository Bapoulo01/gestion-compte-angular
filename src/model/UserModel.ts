export interface UserModel {
    id: number;
    nom: string;
    prenom: string;
    password: string;
    email: string;
    role: Role;

}
export type Role = 'Admin' | 'Client';
export type UserList = UserModel[];