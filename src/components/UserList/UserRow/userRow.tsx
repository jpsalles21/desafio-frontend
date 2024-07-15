import { User } from "@/types/user";
import './style.css'
import { useRouter } from "next/navigation";

interface UserRowProps {
    user: User,
    openEditModal: () => void,
    setSelectedUser: (user: User) => void
    deleteUser: (user: User) => void  
}

const UserRow = ({ user, openEditModal, setSelectedUser, deleteUser }: UserRowProps) => {

    const router = useRouter();
    
    const handleSelectedUser = () => { 
        setSelectedUser(user);
        openEditModal();
    }    

    const handleDeleteUser = () => {
        deleteUser(user)
    }

    const handleViewProfile = () => { 
        router.push(`/usuario?id=${user.id}`)
    }

    return (
    <tr>
        <td className="user-list-content__name" onClick={handleViewProfile}>{user.name}</td>
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
