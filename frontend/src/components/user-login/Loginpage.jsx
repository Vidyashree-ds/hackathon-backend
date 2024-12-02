import React,{ useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants";
import "../../styles/Form.css"


function LoginPage({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

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
        }
    };

    return (
        // <form  className="form-container">
        //     <h1>{name}</h1>
        //     <input
        //         className="form-input"
        //         type="text"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //         placeholder="Username"
        //     />
        //     <input
        //         className="form-input"
        //         type="password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         placeholder="Password"
        //     />
        //     {loading && <LoadingIndicator />}
        //     <button className="form-button" type="submit">
        //         {name}
        //     </button>
        // </form>
        <div class="container">
        <div class="login-card">
            <div class="logo">
                <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" width="80" alt="Bayer Healthcare Logo"/>
            </div>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" required=""/>
                <input type="password" placeholder="Password" required=""/>
                <button class="btn" type="submit">Login</button>
            </form>
            <div class="links">
                <a href="#">Forgot Password?</a>
                <a href="#">New User? Register here</a>
            </div>
        </div>
    </div>
    );
}

export default LoginPage