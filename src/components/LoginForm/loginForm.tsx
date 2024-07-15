'use client'
import './style.css'
import { Button } from "@/components/Button/button";
import { useState } from 'react'

export const LoginForm = () => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (

        <div className="login-form__container">
            <h3>Bem vindo</h3>
            <form className="login-form__inputs">
                <div className="login-form__input-email">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email" onChange={(e) => setEmailValue(e.target.value)} value={emailValue} />
                </div>
                <div className="login-form__input-password">
                    <label htmlFor="password">Senha</label>
                    <input type='password' id="password" placeholder='Senha' onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} />
                </div>
                <div className="login-form__button">
                    <Button label="Login" variant="login" />
                </div>
            </form>
        </div>

    )
}
