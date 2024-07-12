import { Button } from "../Button/button"
import './style.css'
import UserRow from "./UserRow/userRow"
import { User } from "@/types/user"

interface UserTableProps {
    users: User[];
}

export const UserList = ({ users }: UserTableProps) => {
    return (
        <section className="user-list">
            <div className="user-list__header">
                <h2>Usuários</h2>
                <Button label="Adicionar usuário" type="addUser" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Nível de Acesso</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <UserRow key={user.email} user={user} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}