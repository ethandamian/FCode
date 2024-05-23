import { NavLink } from "react-router-dom"
import "./Error.css"

export default function Error(){
    return (
        <div>
            <h1>Ooops</h1>
            <p>Ocurrió un error inesperado</p>
            <NavLink to='/'><button className="btn btn-normal"> Volvamos a casa</button></NavLink>
        </div>
    )
}