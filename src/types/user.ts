
export interface User {
    id: string | number;
    email: string;
    name: string;
    accessLevel: 1 | 2 | 3 | 4 | 5;
    password: string;
}
