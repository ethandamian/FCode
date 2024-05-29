import "./Proyectos.css"
import { NavLink } from "react-router-dom"
import projects from "../../Images/projects.png"

export default function Proyectos(){
    return (
        <div>
            <h2>Proyectos</h2>
            <div className="text-center mb-5 mt-3">
                <NavLink><button className="btn btn-normal mt-3">Ver todos los proyectos</button></NavLink>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    <div className="col">
                        <div className="card tarjeta" style={{ width: 18 + "rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <div className="time">
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Inicio: Jue 30 nov 2023</p>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                <a href="#" className="btn btn-login">Visitar</a>
                                <div className="mt-2 izq">
                                    <p><i class="bi bi-people-fill"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card tarjeta" style={{ width: 18 + "rem" }}>
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                                <div className="time">
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Inicio: Mar 30 abr 2024</p>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                <a href="#" className="btn btn-login">Visitar</a>
                                <div className="mt-2 izq">
                                    <p><i class="bi bi-people-fill"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card tarjeta" style={{ width: 18 + "rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <div className="time">
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Inicio: Jue 21 mar 2024</p>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                <a href="#" className="btn btn-login">Visitar</a>
                                <div className="mt-2 izq">
                                    <p><i class="bi bi-people-fill"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <img src={projects} className="projects-img"/>
            </div>
        </div>
    )
}