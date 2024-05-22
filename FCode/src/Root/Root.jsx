import {Outlet} from "react-router-dom"
import Navigation from './Navigation/Navigation.jsx'
import Footer from "./Footer/Footer.jsx";

export default function Root(){
    return (
        <>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}