'use client'
import { useEffect, useState } from 'react';
import './style.css'
import { User } from '@/types/user';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import { Button } from '../Button/button';
import { useRouter } from 'next/navigation';
import { getIn } from 'yup';

export const UserProfile = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const router = useRouter();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get<User>(`http://localhost:8080/user/${id}`);
                setUser(response.data);
            } catch (error) {
                console.log('Erro');
            }
        }
        getUser();
    }, [])

    const handleGoBack = () => {
        router.push('/bolsistas');
    }

    const getInitials = (name: string | undefined): string => {
        if (!name) return '';
        const parts = name.split(' ');
        const initials = parts.slice(0, 2).map(part => part[0]).join('');
        return initials.toUpperCase();
    };
    

    return (
        <div className="user-profile-content">
            <div className="user-profile-content__header">
                <span className="user-profile-content__circle">{getInitials(user?.name)}</span>
                <h2 className="user-profile-content__header__name">{user?.name}</h2>
                <Button label="Voltar para tabela" variant='back' onClick={handleGoBack} />
            </div>
            <div className="user-profile-content__user">
                <h2>Informações</h2>
                <div className="user-profile-content__user__fields">
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" value={user?.name} />
                        <label htmlFor="access-level">Nível de acesso</label>
                        <input type="text" id="access-level" value={user?.accessLevel} />
                        <label htmlFor="password">Senha</label>
                        <input type="text" id="password" />
                    </div>
                    <div className="user-profile-content__user__field-right">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={user?.email} />
                        </div>
                        <div>
                            <label htmlFor="">Confirmar senha</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}