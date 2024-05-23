import { NavLink } from "react-router-dom"
import "./Home.css"

export default function Home(){
    return (
        <>
            <h2>Hola Roni! ¿Listo para aprender cosas nuevas?</h2>
            <div>
                <div className="article">
                    <h3>Últimos artículos visitados</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div class="card" style={{width: 18 + "rem"}}>
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-login">Visitar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="card" style={{width: 18 + "rem"}}>
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-login">Visitar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div class="card" style={{width: 18 + "rem"}}>
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-login">Visitar</a>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <NavLink><button className="btn btn-normal mt-3">Descubre nuevos artículos</button></NavLink>
            </div>
        </>
    )
}