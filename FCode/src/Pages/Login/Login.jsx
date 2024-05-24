import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Root/UserProvider/UserProvider"

import { toast } from "sonner"

import "./Login.css"
import rocket from "../../Images/rocket.png"

export default function Login() {
    const navigate = useNavigate();

    const { login, user } = useContext(UserContext);


    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejar el envío del formulario

        let respuesta = login(loginUser.email, loginUser.password);
        if (respuesta !== null) {
            toast.error(respuesta, {
                position: 'top-center',
                duration: 3000,
            });
        } else {
            navigate('/recursos');
        }

        console.log('Login User:', loginUser);
    };


    return (
        <div className="container-login">

            <div className="col-6 d-flex justify-content img-container">
                <img src={rocket} className="img-rocket" />
            </div>
            <div className="info">
                <p className="txt">¡Únete a la comunidad de alumnos que buscan las mejores oportunidades laborales!</p>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label className="d-flex justify-content">Email</label>
                        <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"
                            name="email" value={loginUser.email} onChange={handleChange} />
                    </div>
                    <div className="input">
                        <label className="d-flex justify-content">Contraseña</label>
                        <input type="password" className="form-control" id="InputPassword"
                            name="password" value={loginUser.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-login" >Login</button>
                </form>
            </div>

        </div>
    )
}