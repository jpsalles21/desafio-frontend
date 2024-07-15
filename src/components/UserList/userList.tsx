'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../Button/button';
import './style.css';
import UserRow from './UserRow/userRow';
import { User } from "@/types/user";
import { UserModal } from '../UserModal/userModal';

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formType, setFormType] = useState<'create' | 'edit'>('create');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('http://localhost:8080/users');
                setUsers(response.data);
            } catch (error) {
                setError('Erro ao buscar usuários');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [users]);

    if (loading) {
        return <div style={{ fontSize: '50px' }}>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleAddNewUser = () => {
        setShowModal(true);
        setFormType('create');
    }

    const handleEditUser = () => {
        setShowModal(true);
        setFormType('edit');
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedUser(undefined);
    }

    const deleteUser = async (user: User) => {
        try {
            const response = await axios.delete(`http://localhost:8080/user/${user.id}`)
        } catch (error) {
            console.log('Erro')
        }
    }

    return (
        <section className="user-list-content">
            <div className="user-list-content__header">
                <h2>Usuários</h2>
                <Button label="Adicionar usuário" variant="addUser" onClick={handleAddNewUser} />
            </div>
            {users.length === 0 ? (
                <div className='empty-list' style={{display: 'flex', justifyContent: 'center', fontSize: '40px', padding: '180px'}}><p>Não há usuários cadastrados.</p></div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>NOME</th>

                            <th className='user-list-content__cell-alignment'>EMAIL</th>
                            <th className='user-list-content__cell-alignment'>NÍVEL DE ACESSO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <UserRow key={user.email} user={user} openEditModal={handleEditUser} setSelectedUser={setSelectedUser} deleteUser={deleteUser}  />
                        ))}
                    </tbody>
                </table>
            )}
            <UserModal isOpen={showModal} closeModal={handleCloseModal} selectedUser={selectedUser} formType={formType} />
        </section>
    );
};
