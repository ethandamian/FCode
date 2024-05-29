import "./Eventos.css"
import { NavLink } from "react-router-dom"
import clock from "../../Images/clock.png"

export default function Eventos(){
    return (
        <div>
            <h2>Eventos</h2>
            <div className="text-center mb-5 mt-3">
                <NavLink><button className="btn btn-normal mt-3">Ver todos los eventos</button></NavLink>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    <div className="col">
                        <div className="card tarjeta" style={{ width: 18 + "rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <div className="time">
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Jue 13 jun 2024</p>
                                    <p className="lab"><i class="bi bi-clock"></i>  12:00 - 23:00 hrs</p>
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
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Vie 14 jun 2024</p>
                                    <p className="lab"><i class="bi bi-clock"></i> 12:00 - 23:00 hrs</p>
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
                                    <p className="lab"><i class="bi bi-calendar-event"></i> Lun 17 jun 2024</p>
                                    <p className="lab"><i class="bi bi-clock"></i>10:00 - 23:59 hrs</p>
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
                <img src={clock} className="clock"/>
            </div>
        </div>
    )
}