import { User } from "@/types/user";
import './style.css'

interface UserRowProps {
    user: User,
    openEditModal: () => void,
    setSelectedUser: (user: User) => void
    deleteUser: (user: User) => void  
  
}
const UserRow = ({ user, openEditModal, setSelectedUser, deleteUser}: UserRowProps) => {
    
    const handleSelectedUser = () => { 
        setSelectedUser(user);
        openEditModal();
    }    

    const handleDeleteUser = () => {
        deleteUser(user)
    }

    return (
    <tr>
        <td>{user.name}</td>
        <td className="user-list-content__cell-alignment">{user.email}</td>
        <td className="user-list-content__cell-alignment">{user.accessLevel}</td>
        <td>
            <div className="actions">
                <img src="/assets/trash-2.svg" alt="trash" onClick={handleDeleteUser} />
                <img src="/assets/edit.svg" alt="edit" onClick={handleSelectedUser} />
            </div>
        </td>
    </tr>
);
}

export default UserRow;
