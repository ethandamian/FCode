// Navigation.jsx
import logo from "./../../Images/logo.png"
import { NavLink } from "react-router-dom";
import "./Navigation.css";


export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark barra">
            <div className="container-fluid nav-content">
                <a className="navbar-brand"><img src={logo} /></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="nav-links" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recursos">Recursos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/comunidad">Comunidad</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/proyectos">Proyectos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/eventos">Eventos</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="input-group search-bar">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <span className="input-group-text bg-white border-0">
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                    </form>
                    <button className="btn btn-outline-light ms-2 btn-sign-up">Sign up</button>
                </div>
            </div>
        </nav>
    );
}
