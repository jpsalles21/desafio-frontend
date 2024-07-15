import { Button } from "@/components/Button/button";
import './style.css'
import { LoginForm } from "@/components/LoginForm/loginForm";

export default function Login () {
    return (
        <div className="login-container">
            <div className="login-container__art">
                <img className="wave1" src="/assets/wave1.png" alt="" />
                <img className="wave2"src="/assets/wave2.png" alt="" />
            </div>
            <section className="form-container">
              <LoginForm/>
            </section>
        </div>
    );
}