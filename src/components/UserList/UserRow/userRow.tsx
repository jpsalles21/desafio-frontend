import { User } from "@/types/user";

interface UserRowProps {
    user: User
}
const UserRow = ({user}: UserRowProps) => (
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.level}</td>
        <td>           
            
        </td>
    </tr>
);

export default UserRow;
