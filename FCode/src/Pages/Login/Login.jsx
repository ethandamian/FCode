import "./Login.css"
import rocket from "../../Images/rocket.png"

export default function Login(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex justify-content">
                    <img src={rocket} className="img-rocket"/>
                </div>
                <div className="col-6 info">
                    <p className="txt">¡Únete a la comunidad de alumnos que buscan las mejores oportunidades laborales!</p>
                    <form>
                        <div className="mb-3">
                            <label for="InputEmail" className="d-flex justify-content">Email</label>
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword1" className="d-flex justify-content">Contraseña</label>
                            <input type="password" className="form-control" id="InputPassword"/>
                        </div>
                        <button type="submit" className="btn btn-login">Login</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}