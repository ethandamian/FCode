import { NavLink } from "react-router-dom"
import "./Recursos.css"

export default function Recursos() {
    return (
        <>
            <h2 className="mb-5">Hola Roni! ¿Listo para aprender cosas nuevas?</h2>
            <div className="article">
                <h3 className="mt-2 mb-4 ultimos">Últimos artículos visitados</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <NavLink><button className="btn btn-normal mt-3">Descubre nuevos artículos</button></NavLink>
            </div>
        </>
    )
}