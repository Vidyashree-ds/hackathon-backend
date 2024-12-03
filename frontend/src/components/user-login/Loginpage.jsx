import React,{ useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants";

import "../../styles/Form.scss";
import { validate as validateEmail } from 'email-validator';



function LoginPage({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasError,setHasError] = useState(false)
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const validateOnSave = () => {
       return validateEmail(username)
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const valid  = validateOnSave();
        if(valid){
        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(TOKEN, res.data.token);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }}
        else{
            setHasError(true)
        }
    };

    return (
        <div class="container">
        <div class="login-card">
            <div class="logo">
                <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" width="80" alt="Bayer Healthcare Logo"/>
            </div>
            <h1>{method =="login"?"Login": "Register"}</h1>
            <form class="loginform">
                <input type="email" placeholder="Email" required="" value={username}
                onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" required=""  value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <button class="btn" type="submit" onClick={(e) =>handleSubmit()}>{method =="login"?"Login": "Register"}</button>
            </form>
           {method =="login" && (<div class="links">
                <a href="#">Forgot Password?</a>
                <a href="/register"  >New User? Register here</a>
            </div>)}
        </div>
    </div>
    );
}

export default LoginPage
