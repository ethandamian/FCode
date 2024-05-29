import { NavLink } from "react-router-dom"
import ts from "../../mock/Images/ts.png"
import sql from "../../mock/Images/sql.png"
import ciber from "../../mock/Images/ciber.png"
import c from "../../mock/Images/c.png"
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
                                <img src={ts} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Curso completo de TypeScript</h5>
                                    <p className="card-text">A lo largo de 13 clases aprenderás a configurar el entorno de desarrollo, compilar código a TypeScript, crear clases e interfaces, gestionar módulos, herencia y tipos.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src={sql} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aprende SQL</h5>
                                    <p className="card-text">Este curso ofrece una introducción completa a SQL en tan solo dos horas, ideal tanto para principiantes como para profesionales que desean reforzar sus conocimientos.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src={ciber} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Ciberseguridad para principiantes</h5>
                                    <p className="card-text"> En esta formación encontrarás las claves y buenas prácticas necesarias para no ser vulnerable a ciberataques y amenazas existentes en la red.</p>
                                    <a href="#" className="btn btn-login">Visitar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                            <div className="card" style={{ width: 18 + "rem" }}>
                                <img src={c} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Curso de C</h5>
                                    <p className="card-text">Este curso cuenta con 29 lecciones en las cuales aprenderás lo que te ayudará an dar tus primeros pasos en el mundo de la programación en C de manera fácil y práctica.</p>
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