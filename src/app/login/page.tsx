import { Button } from "@/components/Button/button";
import './style.css'
import { LoginForm } from "@/components/LoginForm/loginForm";

export default function Login () {
    return (
        <div className="login-container">
            <div className="art">
                <p>oi</p>
            </div>
            <section className="form-container">
              <LoginForm/>
            </section>
        </div>
    );
}