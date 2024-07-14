import axios from 'axios';
import { Button } from '../Button/button';
import './style.css';
import { User } from '@/types/user';


interface UserModalProps {
    isOpen: boolean,
    closeModal: () => void,
    selectedUser?: User,
    formType: 'create' | 'edit',
}

export const UserModal = ({ isOpen, closeModal, formType, selectedUser }: UserModalProps) => {
    if (!isOpen) {
        return null;
    }

    const addNewUser = async (formData: FormData) => {
        try {
            const response = await axios.post('http://localhost:8080/user', {
                "name": `${formData.get('name')}`,
                "email": `${formData.get('email')}`,
                "accessLevel": `${formData.get('accessLevel')}`,
                "password": `${formData.get('password')}`
            });
            console.log(response.data);
        } catch (error) {
            console.log('Erro');
        }
    }

    const editUser = async (formData: FormData) => {
        try {
            const response = await axios.put(`http://localhost:8080/user/${selectedUser?.id}`, {
                "name": `${formData.get('name')}`,
                "email": `${formData.get('email')}`,
                "accessLevel": `${formData.get('accessLevel')}`,
                "password": `${formData.get('password')}`
            });
            console.log(response.data);
        } catch (error) {
            console.log('Erro');
        }
    } 

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return (
        <div className="modal-overlay" onClick={handleOutsideClick}>
            <div className="modal">
                <div className="modal-header">
                    <span className="modal-close" onClick={closeModal}>
                        &times;
                    </span>
                </div>
                <div className="modal-content">
                    <div className="modal-content__header">
                        <h2>{formType == 'create' ? 'Adicionar usuário' : 'Editar usuário'}</h2>
                    </div>
                    <form className="modal-content__inputs" action={formType == 'create' ? addNewUser : editUser}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" defaultValue={selectedUser ? selectedUser.name : ''} />
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" defaultValue={selectedUser ? selectedUser.email : ''} />
                        <label htmlFor="accesslevel">Nível de acesso</label>
                        <input type="text" id="access-level" name="accessLevel" defaultValue={selectedUser ? selectedUser.accessLevel : ''} />
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" name="password" />
                        <label htmlFor="password-confirm">Confirmar senha</label>
                        <input type="text" id="password-confirm" />
                        <div className="modal-content__button">
                            {formType == 'create' ?
                                <Button label="Criar" variant="save" type="submit" /> :
                                <Button label="Salvar" variant="save" type="submit" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

